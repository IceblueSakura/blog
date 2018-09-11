/**
 * Copyright 2016 Google Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
*/

// DO NOT EDIT THIS GENERATED OUTPUT DIRECTLY!
// This file should be overwritten as part of your build process.
// If you need to extend the behavior of the generated service worker, the best approach is to write
// additional code and include it using the importScripts option:
//   https://github.com/GoogleChrome/sw-precache#importscripts-arraystring
//
// Alternatively, it's possible to make changes to the underlying template file and then use that as the
// new base for generating output, via the templateFilePath option:
//   https://github.com/GoogleChrome/sw-precache#templatefilepath-string
//
// If you go that route, make sure that whenever you update your sw-precache dependency, you reconcile any
// changes made to this original template file with your modified copy.

// This generated service worker JavaScript will precache your site's resources.
// The code needs to be saved in a .js file at the top-level of your site, and registered
// from your pages in order to be used. See
// https://github.com/googlechrome/sw-precache/blob/master/demo/app/js/service-worker-registration.js
// for an example of how you can register this script and handle various service worker events.

/* eslint-env worker, serviceworker */
/* eslint-disable indent, no-unused-vars, no-multiple-empty-lines, max-nested-callbacks, space-before-function-paren, quotes, comma-spacing */
'use strict';

var precacheConfig = [["/2018/08/22/记录-0/index.html","cea066a3420bc236201c2f3938b5fa6d"],["/2018/08/22/记录-1/index.html","f073b21c71913e863a9a6fca003b7471"],["/2018/08/23/记录-2/index.html","4389a7da66236e62b66f21fec8dc8a42"],["/2018/08/24/记录-3/index.html","ac2469b1b0825f686f84b68b2b0f3e78"],["/2018/08/25/记录-4/index.html","639f5e2dfcc4039e2f104f397423aa78"],["/2018/08/26/记录-5/index.html","8d476c6a145f8bfbf47eb3b450f42841"],["/2018/08/27/记录-6/index.html","bbd481d68f00db6dc48eb28146a81ca1"],["/2018/08/28/记录-7/index.html","8cc035067eb805191d48eddd129d9e50"],["/2018/08/29/记录-8/index.html","c0560f45e4ba4809a42d5a2894d8f312"],["/2018/08/30/记录-9/index.html","dbd0e24cbbc7b39c2156c575f3247773"],["/2018/08/31/晚上连着做了三个噩梦/index.html","ce671b59b08aa458b732ef0d52758741"],["/2018/08/31/记录-10/index.html","4fa4336d2cdeb4c3c6b52767481a0182"],["/2018/09/01/记录11/index.html","5fb1c02d8a6b4a5b2ecf2fb860701fb3"],["/2018/09/02/记录12/index.html","5c95552d9b7937a438d72b88c1a217f5"],["/2018/09/03/突然想到/index.html","55c92980ce842fcc223829fae9dc83d2"],["/2018/09/03/记录13/index.html","3a948b3d7cf7f6114eb9696bbab08897"],["/2018/09/04/记录14/index.html","0d2b2044fcb19228b7be438befb1d9c3"],["/2018/09/05/记录15/index.html","2f2c09e5e7e112709be54ff6cdeef649"],["/2018/09/06/倾听/index.html","94022d24fed926d7d0728d774d6fc174"],["/2018/09/06/记一场清晰的噩梦/index.html","b9b8ce1959db2195fdbc842df4caba6f"],["/2018/09/06/记录16/index.html","2806ebd392fd4230671259312cdf764c"],["/2018/09/07/记录17/index.html","2f5edaecfb5ba41c06931ce196ca3364"],["/2018/09/08/很棒的一场梦/index.html","445055b7c4c77df0ce1cee0d9f420006"],["/2018/09/08/记录18/index.html","d76be55cbca9a4faf462e9b370aec1c8"],["/2018/09/09/记录19/index.html","d9a381270909839df35f32bfc5bf1fc4"],["/2018/09/10/记录20/index.html","57d044227850daed699689271b77963e"],["/2018/09/11/记录21/index.html","430e51871ab418457456a6ffb808c2b4"],["/404/index.html","7b43f8fdba70b9b890a402ccc22acde0"],["/about/index.html","bfa7a2bfe2ea2798a5be49b90be7d1e6"],["/archives/2018/08/index.html","e2dee775d6f4d6527f06f90030ac2f43"],["/archives/2018/08/page/2/index.html","25f788761f89f493b96a0d9ba5c2e1fe"],["/archives/2018/09/index.html","1d8d866cd8e31adca7b3c56790fa99c6"],["/archives/2018/09/page/2/index.html","0d78ef87f57d0698799a3d020ae86ec0"],["/archives/2018/index.html","b04ad1afd167f15e7b5429e11ce50727"],["/archives/2018/page/2/index.html","975fd51acfe77fc5511dd8c161196651"],["/archives/2018/page/3/index.html","826a23b90216e21793b56d18ff318771"],["/archives/index.html","c50244b052fdc9d98d85ebab98ca416f"],["/archives/page/2/index.html","c3935148a415e74a40dd46e231662799"],["/archives/page/3/index.html","4b4bdc277f1d0e6fbc8bef802c4e2daf"],["/categories/index.html","7c5eab0c1fca0bffbb3f9bf54720a5e7"],["/categories/杂记/index.html","824c42ce3de5fc402c7523116abfd7b6"],["/categories/梦/index.html","a9ebd1b3efb4de8239603d5c5b29afe1"],["/categories/记录/index.html","d71e83637386141b2cad9c73b7db9d1d"],["/categories/记录/page/2/index.html","2ed4e661ca67525da6af5db9c658b9df"],["/categories/记录/page/3/index.html","a21df5509ee8dac8185b1ddd088a914e"],["/css/index.css","0ad931abf3611cec4a6d63e21d5d9a48"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/img/#49B1F5.jpg","4b562f8a8ac96fa8ef052ec06db68704"],["/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["/img/avatar.jpg","94e2d6cdbbbd8b5d4368984df7387ba0"],["/img/avatar.png","6cc4a809d23e3d8946a299ae4ce4e4cd"],["/img/记录11_歌曲.jpg","202687d8c9279a9f44e37deb1d9f2b84"],["/index.html","fd9c350356e687ac0076a53725865948"],["/js/copy.js","f4607057c0513bd07a69fcac08121979"],["/js/fancybox.js","cdef3c681834a3e5ee4de9a7ed2e0fb0"],["/js/fireworks.js","c186e041cb64c2e7efd345b7838f6ad7"],["/js/head.js","72dbb78b4e9c4cdf14fd4b8c9bd9828c"],["/js/hexo-theme-melody.js","d41d8cd98f00b204e9800998ecf8427e"],["/js/scroll.js","c1789d3ce75d3ff59ea20a6b435c2fcf"],["/js/search/algolia.js","53160985d32d6fd66d98aa0e05b081ac"],["/js/search/local-search.js","8f69402950f5566dd77f66005a9d17fb"],["/js/sidebar.js","d24db780974e661198eeb2e45f20a28f"],["/js/third-party/anime.min.js","9b4bbe6deb700e1c3606eab732f5eea5"],["/js/third-party/jquery.fancybox.min.js","3c9fa1c1199cd4f874d855ecb1641335"],["/js/third-party/jquery.min.js","c9f5aeeca3ad37bf2aa006139b935f0a"],["/js/third-party/reveal/head.min.js","aad121203010122e05f1766d92385214"],["/js/third-party/reveal/highlight.min.js","44594243bec43813a16371af8fe7e105"],["/js/third-party/reveal/markdown.min.js","7ec4cef5a7fe3f0bf0eb4dc6d7bca114"],["/js/third-party/reveal/marked.min.js","c2a88705e206d71dc21fdc4445349127"],["/js/third-party/reveal/math.min.js","0a278fee2e57c530ab07f7d2d9ea8d96"],["/js/third-party/reveal/notes.min.js","89a0dfae4d706f9c75b317f686c3aa14"],["/js/third-party/reveal/reveal.min.js","8988419d67efb5fe93e291a357e26ec9"],["/js/third-party/reveal/zoom.min.js","9791f96e63e7d534cba2b67d4bda0419"],["/js/third-party/velocity.min.js","64da069aba987ea0512cf610600a56d1"],["/js/third-party/velocity.ui.min.js","c8ca438424a080620f7b2f4ee4b0fff1"],["/js/transition.js","bd261a5dda799613501070ecc19d6e69"],["/js/utils.js","3ff3423d966a1c351e9867813b3f6d36"],["/page/2/index.html","c5ceaf5f6ed633c489ad5d960df70f0b"],["/page/3/index.html","af5c9e54f8894482ba3e6c8c0b644bb5"],["/tags/index.html","79e9ebfb3308d98b45b021f0fe9e2615"],["/tags/听见了/index.html","7c836dc67c40e96c8dd5c438aeba1602"],["/tags/噩梦/index.html","012d555a34986c374a682e393e30d723"],["/tags/幸福的事情/index.html","c4de336fe6afa0012b5e5ff654ddf3c8"],["/tags/羡慕的事情/index.html","1362c3e767519be2483577304c4320c1"],["/tags/记录/index.html","69269c018f76c77f9edec4a226edd986"],["/tags/记录/page/2/index.html","8a044d355cc8620dbf0f4ab68ec3a189"],["/tags/记录，心态爆炸/index.html","7b86e7605db5ca298ae67c79d21ce708"],["/tags/记录，日出/index.html","b051ada43e76e62c64a7cf9524403664"]];
var cacheName = 'sw-precache-v3--' + (self.registration ? self.registration.scope : '');


var ignoreUrlParametersMatching = [/^utm_/];



var addDirectoryIndex = function(originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
      url.pathname += index;
    }
    return url.toString();
  };

var cleanResponse = function(originalResponse) {
    // If this is not a redirected response, then we don't have to do anything.
    if (!originalResponse.redirected) {
      return Promise.resolve(originalResponse);
    }

    // Firefox 50 and below doesn't support the Response.body stream, so we may
    // need to read the entire body to memory as a Blob.
    var bodyPromise = 'body' in originalResponse ?
      Promise.resolve(originalResponse.body) :
      originalResponse.blob();

    return bodyPromise.then(function(body) {
      // new Response() is happy when passed either a stream or a Blob.
      return new Response(body, {
        headers: originalResponse.headers,
        status: originalResponse.status,
        statusText: originalResponse.statusText
      });
    });
  };

var createCacheKey = function(originalUrl, paramName, paramValue,
                           dontCacheBustUrlsMatching) {
    // Create a new URL object to avoid modifying originalUrl.
    var url = new URL(originalUrl);

    // If dontCacheBustUrlsMatching is not set, or if we don't have a match,
    // then add in the extra cache-busting URL parameter.
    if (!dontCacheBustUrlsMatching ||
        !(url.pathname.match(dontCacheBustUrlsMatching))) {
      url.search += (url.search ? '&' : '') +
        encodeURIComponent(paramName) + '=' + encodeURIComponent(paramValue);
    }

    return url.toString();
  };

var isPathWhitelisted = function(whitelist, absoluteUrlString) {
    // If the whitelist is empty, then consider all URLs to be whitelisted.
    if (whitelist.length === 0) {
      return true;
    }

    // Otherwise compare each path regex to the path of the URL passed in.
    var path = (new URL(absoluteUrlString)).pathname;
    return whitelist.some(function(whitelistedPathRegex) {
      return path.match(whitelistedPathRegex);
    });
  };

var stripIgnoredUrlParameters = function(originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);
    // Remove the hash; see https://github.com/GoogleChrome/sw-precache/issues/290
    url.hash = '';

    url.search = url.search.slice(1) // Exclude initial '?'
      .split('&') // Split into an array of 'key=value' strings
      .map(function(kv) {
        return kv.split('='); // Split each 'key=value' string into a [key, value] array
      })
      .filter(function(kv) {
        return ignoreUrlParametersMatching.every(function(ignoredRegex) {
          return !ignoredRegex.test(kv[0]); // Return true iff the key doesn't match any of the regexes.
        });
      })
      .map(function(kv) {
        return kv.join('='); // Join each [key, value] array into a 'key=value' string
      })
      .join('&'); // Join the array of 'key=value' strings into a string with '&' in between each

    return url.toString();
  };


var hashParamName = '_sw-precache';
var urlsToCacheKeys = new Map(
  precacheConfig.map(function(item) {
    var relativeUrl = item[0];
    var hash = item[1];
    var absoluteUrl = new URL(relativeUrl, self.location);
    var cacheKey = createCacheKey(absoluteUrl, hashParamName, hash, false);
    return [absoluteUrl.toString(), cacheKey];
  })
);

function setOfCachedUrls(cache) {
  return cache.keys().then(function(requests) {
    return requests.map(function(request) {
      return request.url;
    });
  }).then(function(urls) {
    return new Set(urls);
  });
}

self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return setOfCachedUrls(cache).then(function(cachedUrls) {
        return Promise.all(
          Array.from(urlsToCacheKeys.values()).map(function(cacheKey) {
            // If we don't have a key matching url in the cache already, add it.
            if (!cachedUrls.has(cacheKey)) {
              var request = new Request(cacheKey, {credentials: 'same-origin'});
              return fetch(request).then(function(response) {
                // Bail out of installation unless we get back a 200 OK for
                // every request.
                if (!response.ok) {
                  throw new Error('Request for ' + cacheKey + ' returned a ' +
                    'response with status ' + response.status);
                }

                return cleanResponse(response).then(function(responseToCache) {
                  return cache.put(cacheKey, responseToCache);
                });
              });
            }
          })
        );
      });
    }).then(function() {
      
      // Force the SW to transition from installing -> active state
      return self.skipWaiting();
      
    })
  );
});

self.addEventListener('activate', function(event) {
  var setOfExpectedUrls = new Set(urlsToCacheKeys.values());

  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return cache.keys().then(function(existingRequests) {
        return Promise.all(
          existingRequests.map(function(existingRequest) {
            if (!setOfExpectedUrls.has(existingRequest.url)) {
              return cache.delete(existingRequest);
            }
          })
        );
      });
    }).then(function() {
      
      return self.clients.claim();
      
    })
  );
});


self.addEventListener('fetch', function(event) {
  if (event.request.method === 'GET') {
    // Should we call event.respondWith() inside this fetch event handler?
    // This needs to be determined synchronously, which will give other fetch
    // handlers a chance to handle the request if need be.
    var shouldRespond;

    // First, remove all the ignored parameters and hash fragment, and see if we
    // have that URL in our cache. If so, great! shouldRespond will be true.
    var url = stripIgnoredUrlParameters(event.request.url, ignoreUrlParametersMatching);
    shouldRespond = urlsToCacheKeys.has(url);

    // If shouldRespond is false, check again, this time with 'index.html'
    // (or whatever the directoryIndex option is set to) at the end.
    var directoryIndex = 'index.html';
    if (!shouldRespond && directoryIndex) {
      url = addDirectoryIndex(url, directoryIndex);
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond is still false, check to see if this is a navigation
    // request, and if so, whether the URL matches navigateFallbackWhitelist.
    var navigateFallback = '';
    if (!shouldRespond &&
        navigateFallback &&
        (event.request.mode === 'navigate') &&
        isPathWhitelisted([], event.request.url)) {
      url = new URL(navigateFallback, self.location).toString();
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond was set to true at any point, then call
    // event.respondWith(), using the appropriate cache key.
    if (shouldRespond) {
      event.respondWith(
        caches.open(cacheName).then(function(cache) {
          return cache.match(urlsToCacheKeys.get(url)).then(function(response) {
            if (response) {
              return response;
            }
            throw Error('The cached response that was expected is missing.');
          });
        }).catch(function(e) {
          // Fall back to just fetch()ing the request if some unexpected error
          // prevented the cached response from being valid.
          console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
          return fetch(event.request);
        })
      );
    }
  }
});







