[Open Parking Map](https://openparkingmap.com)
==================

Shows parking restrictions on streets in OpenStreetMap.

Live at [OpenParkingMap.com](https://openparkingmap.com)

Originally built by [zlant (GitHub)](https://github.com/zlant/) / [acsd (OSM)](https://www.openstreetmap.org/user/acsd/). I've added Australian parking signs,
deployed to this website to attract more users and made other small changes, but it's really all
their hard work.

![Screenshot of Berlin](/screenshots/berlin-screenshot-sep-21.jpg?raw=true)

![Screenshot of Sydney Central & Refern](/screenshots/redfern-and-central-screenshot-sep-21.jpg?raw=true)

See their original [launch post on OSM](https://www.openstreetmap.org/user/acsd/diary/45026), and
their deployment of the viewer at [https://zlant.github.io/parking-lanes/#16/52.4751/13.4435](https://zlant.github.io/parking-lanes/#16/52.4751/13.4435).

# Updating the map

Click the `Editor` button in the bottom right. It will take some time to load the data using
Overpass turbo.

![Screenshot of Refern](/screenshots/redfern-screenshot-sep-21.jpg?raw=true)

# Troubleshooting
If the map data isn't loading, either there is no data for your location or Overpass Turbo isn't
returning any data.

If you're moving the map a lot you may get HTTP error 429 - Overpass Turbo has a low rate limit
threshold. I've added a debounce function but it still crops up.

Open your browser console to look for errors. PRs welcome to surface these errors in the UI.

# Local Development
- Install yarn: see https://classic.yarnpkg.com/en/docs/install/
- Install dependencies: `yarn install`
- Start Webpack dev server: `yarn run start`

Geolocation won't work over http. [ngrok](https://ngrok.com/docs) can start an HTTPS tunnel to your
localhost with the following command:

`ngrok http --host-header=rewrite 33444`

## Typecheck

`yarn run typecheck`

# License
MIT
