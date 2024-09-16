[![npm version](https://badge.fury.io/js/%40rapideditor%2Frapid-standalone.svg)](https://badge.fury.io/js/%40rapideditor%2Frapid-standalone)


# rapid-standalone

This project is just a copy of [Rapid](https://github.com/facebook/Rapid), but with all dependencies included.

It is intended for running Rapid in a sandbox kind of environment behind a corporate firewall where it won't have access to fetch resources from the CDN at runtime.

See: https://github.com/facebook/Rapid/issues/1482

The dependencies that we include are:
- [id-tagging-schema](https://github.com/openstreetmap/id-tagging-schema)
- [mapillary-js](https://github.com/mapillary/mapillary-js)
- [maplibre-gl-js](https://github.com/maplibre/maplibre-gl-js)
- [name-suggestion-index](https://github.com/osmlab/name-suggestion-index)
- [osm-community-index](https://github.com/osmlab/osm-community-index)
- [pannellum](https://github.com/mpetroff/pannellum)
- [wmf-sitematrix](https://github.com/osmlab/wmf-sitematrix)


## Usage

You would "use" this by just installing it somewhere.

     > npm install @rapideditor/rapid-standalone

The `/dist` folder contains a copy of Rapid that is configured to not fetch resources from the CDN.


## Build / Test

    > npm install
    > npm run build

To test:

    > npm run start

Visit http://127.0.0.1:8080 and verify that Rapid starts and that it doesn't use the CDN.



## Contributing

Please visit the main [Rapid](https://github.com/facebook/Rapid) project if you want to contribute.


## License

Rapid is available under the [ISC License](https://opensource.org/licenses/ISC).
See the [LICENSE.md](LICENSE.md) file for more details.
