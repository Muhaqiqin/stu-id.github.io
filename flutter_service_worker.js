'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "4a5410cc80a3f0e1df2aca84f72e07bf",
"assets/assets/images/admbisnis_conventional.png": "62aa8766342303510dc230d69facdd2e",
"assets/assets/images/admnegara_conventional.jpg": "4f60c5fd58f7171495a38769cff7961b",
"assets/assets/images/agrotek_realistic.jpg": "77d298d895246cdc28619adde3fc0264",
"assets/assets/images/akuntansi_conventional.jpg": "e77a199d424d9f9a02f509fdec7910da",
"assets/assets/images/arsitektur_artistic.jpg": "9a81f7a9b1da8585f9f64908b20819b6",
"assets/assets/images/biologi_investigative.jpg": "ec4addf27fda9d76444166ef3838f0c7",
"assets/assets/images/bk_social.png": "81493ecdcec46e2915a922493b79c0a4",
"assets/assets/images/dokter_realistic.jpg": "951becdb9ff8899c8d013219ea2a8de5",
"assets/assets/images/elektro_realistic.jpg": "2e90d56dd8c135b1116f25000d69cf51",
"assets/assets/images/fasilitas.png": "c2571d7ad0aa3dc84a8d1d36621e61bc",
"assets/assets/images/fisip_artistic.jpeg": "59038159052771f4ba5756945a73f1e1",
"assets/assets/images/go_to_web.png": "fb97364ad452a22a803b8e2798b7c298",
"assets/assets/images/hi_social.jpg": "1764e5b603e7beecbc4011449df59f2a",
"assets/assets/images/home.png": "a391d3e1d62db3f40d19407320d176bd",
"assets/assets/images/hukum_enterprising.png": "bdca115333875b3797147af6dd02345e",
"assets/assets/images/jurusan.png": "eb72bd3690e2626e72ec9101c2cab9ca",
"assets/assets/images/jurusan_btn.png": "72cab25ec544260c812fd2bfc21fc321",
"assets/assets/images/jur_kom.jpg": "684bf44f037f007871f6353d7b41c67e",
"assets/assets/images/kimia_investigative.jpg": "2ea5b830501df889f7aa1c5337c6b773",
"assets/assets/images/line.png": "6763b25ec7db3b6b26e8001ba74e459e",
"assets/assets/images/logounila.png": "367e915c534e3514775de40b8401b71d",
"assets/assets/images/manajemen_enterprising.png": "30990aa99286f4002bf672114804994f",
"assets/assets/images/mulai.png": "312e93b837583fb44ffa80367ae15ba3",
"assets/assets/images/musik_artistic.jpg": "2748b8af50ff792f594c7a4e63f1a099",
"assets/assets/images/next.png": "623320a36cefaa5c98f800400a648daf",
"assets/assets/images/penjaskes_social.png": "7125b7ddea2130835a72151a6bd1e016",
"assets/assets/images/peternakan_investigative.jpeg": "a232472ef772101d5d9ab431085415c5",
"assets/assets/images/pgsd_social.png": "25a11828a67d6bf1e23a707d6c10361e",
"assets/assets/images/rektorat.png": "1ab26fa616af2b730d769e52087d8d44",
"assets/assets/images/riasec.png": "d90ae8f5c2b2b1592a168f04342ca0c1",
"assets/assets/images/riasec_btn.png": "8bcab41b71dc74455c25fb49e6520c4a",
"assets/assets/images/simanila.png": "ec5b9767a4497d0dcbe12831645dd669",
"assets/assets/images/sipil_realistic.jpg": "254b007f2d7ac0383b1bc99beada1ef1",
"assets/assets/images/tari_artistic.jpg": "d56c8130311eaf89bebac38fad782e13",
"assets/assets/images/teknik_investigative.jpg": "4c10b1009a784ffdbf5ba084a734cc1c",
"assets/assets/images/tentang.png": "0228228771f5aa8534866576b9876006",
"assets/assets/images/tentang_btn.png": "3450bf9572d4adb32db62dc6ac5b6746",
"assets/assets/images/thp_realistic.jpg": "229fe697649edc63129b19728d56e7bf",
"assets/assets/images/tidak.png": "5f744fbfc05bd4d4eda5024fb61ec310",
"assets/assets/images/tkimia_investigative.jpg": "f72a632de03fecc22ef479f376b33399",
"assets/assets/images/unila_btn.png": "d230c86bcd36e23ab1af99ec7baa53b3",
"assets/assets/images/ya.png": "7610d29d88419c3185236f0c33dd102f",
"assets/assets/lottie/accounting.json": "9f91e8415b78482d3e85565b3d4cfb99",
"assets/assets/lottie/engineer.json": "957760ea62388bf7739e1200a2cea609",
"assets/assets/lottie/marketing.json": "4d5ac678b01746b4fa45176ddab73ace",
"assets/assets/lottie/medicine.json": "b486dfdba71bf35147f0069d5d85839a",
"assets/assets/lottie/photography.json": "fa87fd7de86ad74bdc950ce786956260",
"assets/assets/lottie/real.json": "53280b660dc4a4ef933eabd727c7aada",
"assets/assets/lottie/realistic.json": "440aded383aee3160361cdaa92665ac0",
"assets/assets/lottie/vr.json": "f5624403391774743607e54d5d352715",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "e7069dfd19b331be16bed984668fe080",
"assets/NOTICES": "dbaee5c7a16c80a735e09c662e86a322",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/shaders/ink_sparkle.frag": "a04e492a05f9fd1a8cc6f12163b184dd",
"canvaskit/canvaskit.js": "687636ce014616f8b829c44074231939",
"canvaskit/canvaskit.wasm": "d4972dbefe733345d4eabb87d17fcb5f",
"canvaskit/profiling/canvaskit.js": "ba8aac0ba37d0bfa3c9a5f77c761b88b",
"canvaskit/profiling/canvaskit.wasm": "05ad694fda6cfca3f9bbac4b18358f93",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "195f32f4217e034162a6697208586f44",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "e633f39ad2eaf0c55056d8a7bedd1474",
"/": "e633f39ad2eaf0c55056d8a7bedd1474",
"main.dart.js": "cf63c50ba583a9285e076190807fbc7e",
"manifest.json": "558ed1f4fbb6c967df67208d83e42da7",
"version.json": "6f0805874d31707f1d388a1832eab941"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
"assets/AssetManifest.json",
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
