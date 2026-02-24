'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter.js": "24bc71911b75b5f8135c949e27a2984e",
"icons/Icon-512.png": "1d3445195ac659fcb588c2b306fb6dbb",
"icons/Icon-maskable-512.png": "1d3445195ac659fcb588c2b306fb6dbb",
"icons/Icon-192.png": "6e97f530494a46a5819679bd099df80f",
"icons/Icon-maskable-192.png": "6e97f530494a46a5819679bd099df80f",
"favicon-96x96.png": "651a41074e623560a5479c895df395a0",
"manifest.json": "063da8aa1f9520186f9eac2cd19631f0",
"index.html": "1c889521c60e24c840e5a568f9bfdabd",
"/": "1c889521c60e24c840e5a568f9bfdabd",
"favicon-16x16.png": "48368431ba01c8d5d61491c547031afb",
"splash/img/light-4x.png": "21b9d6f2c1d4a8b0a91abee38fba4d9b",
"splash/img/dark-4x.png": "bebec1d15d19d864cf588531d3e4c31c",
"splash/img/dark-3x.png": "2c4a220af456d5f356a233f7e80b8438",
"splash/img/dark-1x.png": "37eaf0674eba9b439b8ca15d746710af",
"splash/img/dark-2x.png": "0560fb7f9c54c4f4c2a09d5f908727f4",
"splash/img/light-1x.png": "deb99fb82fde46b024d1114172ab0dd3",
"splash/img/light-3x.png": "858d80b3be1b7e20ba3c20b7a72a01f8",
"splash/img/light-2x.png": "d228ec8b03840fa2ccfa6ae96c2d3f63",
"assets/shaders/stretch_effect.frag": "40d68efbbf360632f614c731219e95f0",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin.json": "4ad3256da43f1db0d6d5ff599a389796",
"assets/assets/image/profile_image.JPG": "5b0c464be5aa0974eaf09dd2b982c901",
"assets/assets/image/logo.svg": "9621be91c4a94a692bdcdbe1c328d932",
"assets/assets/ring_shape/circle.svg": "9fabb718417b7d4eda61ccdd7e983043",
"assets/assets/ring_shape/half_circle.svg": "08958baacc147417f84a68f1b060fd4f",
"assets/assets/ring_shape/rectangle.svg": "bba7950b860211294ea3f35e386390f0",
"assets/assets/ring_shape/ellipse.svg": "4b4e0f6f4d9292f8173cbaa90ae8a63a",
"assets/assets/ring_shape/round_tapered_band.svg": "0f1e6d5428a6dc842ce7f47f0add76e6",
"assets/assets/svg_icon/error.svg": "e7b18a5500e980c61e48f6620511b3fd",
"assets/assets/svg_icon/delete.svg": "df0c878c9184c2e9983ddfb6a32eceb2",
"assets/assets/svg_icon/policy.svg": "17abb4d345233894ae9f89ecf9556a86",
"assets/assets/svg_icon/info_circle.svg": "c3f58e0fb23093ff9379895de8d0040d",
"assets/assets/svg_icon/arrow_down_left.svg": "96044e0aad0e994cbbeca0f066aa495f",
"assets/assets/svg_icon/arrow_up_right.svg": "348db4d6750d12508504753fc4c20245",
"assets/assets/svg_icon/text_edit.svg": "b6b92fb4f01a66937f271c170cf797e7",
"assets/assets/svg_icon/email.svg": "8e3ded6790d07758a8fb6d8c4bbe49ab",
"assets/assets/svg_icon/eye-closed.svg": "28cf1226b325964bd84ea38e7a8ff0f0",
"assets/assets/svg_icon/calculator.svg": "fca544aa20e928f040c49b7be510f561",
"assets/assets/svg_icon/fit_width.svg": "6b43d2f00b531cd8517fc0e05775cf48",
"assets/assets/svg_icon/arrow_forward.svg": "44fc779df3a0793e2ca66d1f0b36c372",
"assets/assets/svg_icon/warning.svg": "0f9a3d7adf5d4f49f73515d25e20f0ec",
"assets/assets/svg_icon/legal_notice.svg": "266d6c071f779bb239ddab8f74235774",
"assets/assets/svg_icon/user.svg": "3bca29fef187ec1eb65d5d575be9eac6",
"assets/assets/svg_icon/vertical_dots.svg": "97548de647050c5882c215db8a9243f0",
"assets/assets/svg_icon/check.svg": "47cf4978d9fec28aeb515cac49b278e3",
"assets/assets/svg_icon/logout.svg": "19d835edfc498ba9588c16fd0028c570",
"assets/assets/svg_icon/cross_arrows.svg": "43209e62a38fdacf59e67495aefae481",
"assets/assets/svg_icon/arrow_rotate_left_right.svg": "afd34e567e0583c75071fa87a158d8f0",
"assets/assets/svg_icon/arrow_left_right.svg": "93621f300b84fa6ab823c7759fd1427a",
"assets/assets/svg_icon/store.svg": "3dab47e6f416176e399186c111b0630f",
"assets/assets/svg_icon/lock.svg": "721f69f67ef26ec331ac44c9ab3052da",
"assets/assets/svg_icon/star.svg": "3d34dd4aa8603cc8f202ae4e4cc873f3",
"assets/assets/svg_icon/people.svg": "04d04cc6e39a96ef7942b1b65449d551",
"assets/assets/svg_icon/square_foot.svg": "e7b0c80a9e75a834170605f872cdefb6",
"assets/assets/svg_icon/settings_slider_horizontal.svg": "f237edfff7db7095c35cc4c85e78e8d9",
"assets/assets/svg_icon/refresh.svg": "93bee58e1947de8524a7a3c6cdcd048e",
"assets/assets/svg_icon/stone.svg": "53c37141616da4c18b6e41c651fa2695",
"assets/assets/svg_icon/arrow_left.svg": "8665830572b35a063617da23ca1ccf5f",
"assets/assets/svg_icon/mix.svg": "70b308b1bfc31dced1a0e355a3b10011",
"assets/assets/svg_icon/cross_large.svg": "f9c041d07421e0e56667a41b729c5253",
"assets/assets/svg_icon/eye-open.svg": "c9769c3584bafaa809a16bf24463f640",
"assets/assets/svg_icon/weight.svg": "a3b54ef87406111d746bf797ba3eb073",
"assets/assets/svg_icon/user_badge.svg": "9b253bbfda4ebe53e9c7fcfccc6ccd7b",
"assets/assets/svg_icon/stone_plus.svg": "a55a0a5440d82a0c1682f41c70f12933",
"assets/assets/svg_icon/tune.svg": "336fb57d5dd25f1278fd55d24eefef9f",
"assets/assets/svg_icon/legal.svg": "fb6fb4669576621d68ca492fd5ce897d",
"assets/assets/svg_icon/external_link.svg": "d11ae04fe0fbaa917e3a6aed88343324",
"assets/assets/svg_icon/chevron_grabber_vertical.svg": "17f516ee3654b137f1b3d551ed50e3d8",
"assets/fonts/MaterialIcons-Regular.otf": "e970434324906ddfd74cb97f3dc08e8d",
"assets/fonts/rethink-sans/RethinkSans-Medium.ttf": "c8cda5a03549790917b6111ec73548e5",
"assets/fonts/rethink-sans/RethinkSans-Regular.ttf": "1a1d1450b06deeea0d5f77cfc06b4dc0",
"assets/fonts/rethink-sans/RethinkSans-Bold.ttf": "6d380a1ae79a4129f4f08e396d37ef17",
"assets/fonts/rethink-sans/RethinkSans-ExtraBold.ttf": "4c53ab0d80b749b931f1958b2db2e2cf",
"assets/fonts/rethink-sans/RethinkSans-SemiBold.ttf": "c46750e791756688ccddfc60dd1c2070",
"assets/NOTICES": "dd8d2d10e8bf964fcad9d9f467fb2221",
"assets/packages/wiredash/lib/assets/fonts/Inter-Regular.ttf": "eba360005eef21ac6807e45dc8422042",
"assets/packages/wiredash/lib/assets/fonts/Inter-Bold.ttf": "cef517a165e8157d9f14a0911190948d",
"assets/packages/wiredash/lib/assets/fonts/Inter-SemiBold.ttf": "3e87064b7567bef4ecd2ba977ce028bc",
"assets/packages/wiredash/lib/assets/fonts/Wirecons.ttf": "39dff657dd43bfb7ab7e25406d4baab7",
"assets/packages/wiredash/assets/images/logo_white.png": "d51118529c8b6f919c485cd81e9a840e",
"assets/FontManifest.json": "4ff874e7c83d2c6c899516260c127dc0",
"assets/AssetManifest.bin": "a0938e2420b5a8c9661e87f1092328f9",
"canvaskit/chromium/canvaskit.wasm": "a726e3f75a84fcdf495a15817c63a35d",
"canvaskit/chromium/canvaskit.js": "a80c765aaa8af8645c9fb1aae53f9abf",
"canvaskit/chromium/canvaskit.js.symbols": "e2d09f0e434bc118bf67dae526737d07",
"canvaskit/skwasm_heavy.wasm": "b0be7910760d205ea4e011458df6ee01",
"canvaskit/skwasm_heavy.js.symbols": "0755b4fb399918388d71b59ad390b055",
"canvaskit/skwasm.js": "8060d46e9a4901ca9991edd3a26be4f0",
"canvaskit/canvaskit.wasm": "9b6a7830bf26959b200594729d73538e",
"canvaskit/skwasm_heavy.js": "740d43a6b8240ef9e23eed8c48840da4",
"canvaskit/canvaskit.js": "8331fe38e66b3a898c4f37648aaf7ee2",
"canvaskit/skwasm.wasm": "7e5f3afdd3b0747a1fd4517cea239898",
"canvaskit/canvaskit.js.symbols": "a3c9f77715b642d0437d9c275caba91e",
"canvaskit/skwasm.js.symbols": "3a4aadf4e8141f284bd524976b1d6bdc",
"flutter_bootstrap.js": "cf9120e6c078a72965435fe84d191e1f",
"version.json": "c0c4f27d4afe346995eab0dd32565b46",
"main.dart.js": "2e678600cc6900fc1524f49d66ee634d"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
