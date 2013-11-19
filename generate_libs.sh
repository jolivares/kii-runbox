#!/bin/bash

browserify \
-r buffer \
-r dgram \
-r punycode \
-r querystring \
-r url \
-r underscore \
> resources/libs.js