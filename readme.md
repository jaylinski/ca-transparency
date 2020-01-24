# CA Transparency &horbar; Browser Extension

[![Mozilla Add-on](https://img.shields.io/amo/v/ca-transparency.svg)](https://addons.mozilla.org/de/firefox/addon/ca-transparency/)
![npm dependencies](https://img.shields.io/david/jaylinski/ca-transparency.svg)

Browser Extension for analyzing the usage of CA certificates.

Only works with Mozilla Firefox, since it ships its own [Mozilla CA Certificate Store](https://www.mozilla.org/en-US/about/governance/policies/security-group/certs/).

> **Important note**   
> This extension probably slows down your browser, since it intercepts all 
> request in order to extract certificate information.

## Features

* Analyzes the CAs you are using when browsing the web

<div align="center">
<img align="top" width="290" src="screenshots/screenshot_1_controls.png" alt="Screenshot controls">
<img align="top" width="290" src="screenshots/screenshot_2_playlist.png" alt="Screenshot playlist">
<img align="top" width="290" src="screenshots/screenshot_3_device.png" alt="Screenshot device">
</div>

## Installation

* [Mozilla Firefox Addon](https://addons.mozilla.org/firefox/addon/ca-transparency/)

## Configuration

TODO

## Permissions

This extension requires the permission

* to **access your active browser tab**   
  This allows the extension to extract information from your current URL.
* to **inspect web requests to all HTTP, HTTPS and WebSocket URLs**   
  This allows the extension to extract certificate information from web requests.
* to **store data** in your browser   
  This allows the extension to save your settings and to save the collected CA data.
  
### Optional permissions

In order to allow the extension to show you a "New CA" dialog if a new CA is used,
it requires the permission

* to **send you notifications**   

For more information on permissions, visit [developer.mozilla.org](https://developer.mozilla.org/en-US/Add-ons/WebExtensions/manifest.json/permissions).

## Privacy

This extension will never send any data to a third-party. All data stays within the extension.

In order to analyze CAs, the extension collects the following (non-personal) data:

* Used certificate authorities, count of usage, time of usage
* Used domains, count of usage, time of usage, protocol (this can be disabled in settings)
* Certificate errors, count of errors, time of errors

You can delete and export this data at anytime.

## Development

### Build

Run `npm run build`.

### Develop

Run `npm start`.

## Attributions

* Firefox for the original [icon](https://hg.mozilla.org/mozilla-central/file/tip/browser/themes/shared/identity-block/connection-secure.svg)
* [lit-html](https://lit-html.polymer-project.org/) for providing an awesome HTML templating library

## Copyright and license

CA Transparency is licensed under the MIT License - see the `LICENSE` file for details.


# todo 

icon dark/light mode:
https://stackoverflow.com/questions/58880234/toggle-chrome-extension-icon-based-on-light-or-dark-mode-browser

check for changing cas
https://addons.mozilla.org/de/firefox/addon/certwatch/?src=search
