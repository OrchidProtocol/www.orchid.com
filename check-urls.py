#! /usr/bin/env python
# check-urls.py: -*- Python -*-  Test the deployed website for correct operation sans javascript.
# 
#  Copyright (c) 2019 Nathan Handler.
#  Author: Nathan Handler (nhandler@orchid.com)
#  Birthdate: Sat Mar 30 11:52:18 2019.
import argparse
import requests
from getpass import getpass
from selenium import webdriver
from selenium.webdriver.common.desired_capabilities import DesiredCapabilities

url_map = {
    'production': 'https://www.orchid.com',
    'staging': 'https://www.orchid.dev',
    'local':   'http://localhost:8000'
}

parser = argparse.ArgumentParser()
# parser.add_argument('server', nargs='*', default='production', help="The environment to run the tests against. Default: production")
parser.add_argument('--server', required=False, choices=url_map.keys(), default='production', help="The environment to run the tests against. Default: production")
args = parser.parse_args()

options = webdriver.ChromeOptions()
options.add_argument('headless')

capabilities = DesiredCapabilities.CHROME
capabilities['loggingPrefs'] = { 'browser':'ALL' }

driver = webdriver.Chrome(options=options, desired_capabilities=capabilities)

tests = {
    '{base}': 'Humans naturally crave space to freely express their agency.',
    '{base}/app': 'Harnessing the power of community creates a natural and truly next-generation VPN experience.',
    '{base}/network': 'network design draws inspiration from parts of nature that demonstrate emergent self-organization and mutual exchange.',
    '{base}/why-orchid': 'There is no division between the natural world and the digital one.',
    '{base}/events': 'Find us IRL',
    '{base}/privacy-policy': 'This privacy policy has been compiled to better serve those who are concerned with how their \'Personally identifiable information\' (PII) is being used online.',
    '{base}/service-terms': 'We employ the use of cookies.',
    '{base}/index.html': 'Humans naturally crave space to freely express their agency.',
    '{base}/app.html': 'Harnessing the power of community creates a natural and truly next-generation VPN experience.',
    '{base}/network.html': 'network design draws inspiration from parts of nature that demonstrate emergent self-organization and mutual exchange.',
    '{base}/why-orchid.html': 'There is no division between the natural world and the digital one.',
    '{base}/events.html': 'Find us IRL',
    '{base}/privacy-policy.html': 'This privacy policy has been compiled to better serve those who are concerned with how their \'Personally identifiable information\' (PII) is being used online.',
    '{base}/service-terms.html': 'We employ the use of cookies.',
    '{base}/assets/whitepaper/whitepaper.pdf': '',
}

if args.server == 'staging':
    username = raw_input("Username ({base}): ".format(base=url_map[args.server]))
    password = getpass(prompt="Password ({base}): ".format(base=url_map[args.server]))
    auth = (username, password)
else:
    username = None
    password = None
    auth = None

for raw_url, string in tests.items():
    url = raw_url.format(base=url_map[args.server])
    print("Testing: {url}".format(url=url))

    if auth is not None:
        r = requests.get(url, auth=auth)
        driver.get(url.replace('//', '//{username}:{password}@'.format(username=username,password=password)))
    else:
        r = requests.get(url)
        driver.get(url)

    assert 200 == r.status_code, "{url} returned {status}".format(url=url, status=r.status_code)
    assert string in r.text, "{string} not in {url}".format(string=string, url=url)

    assert string in driver.page_source, "{string} not in {url}".format(string=string, url=url)
    error_log = driver.get_log('browser')
    assert 0 == len(error_log), "{count} Javascript errors on {url}:\n\t{errors}".format(url=url, count=len(error_log), errors=error_log)

r = requests.get('http://orchid.com')
assert 200 == r.status_code, "http://orchid.com returned {status}".format(status=r.status_code)
assert 'https://www.orchid.com/' == r.url, "http://orchid.com ends up at {url} instead of https://www.orchid.com/".format(url=r.url)

driver.quit()
