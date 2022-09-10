'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "e7c3c5386cbd656da8935e753b8e16a1",
"index.html": "1f392ba5502c9cf3a7547b96781c7893",
"/": "1f392ba5502c9cf3a7547b96781c7893",
"main.dart.js": "730809458517f7bd8dc2ea1f658b4c9a",
"flutter.js": "eb2682e33f25cd8f1fc59011497c35f8",
"README.md": "2532ba6ad16a08682080178d2684bc39",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "a31ca2ae14b768ef8d0ad78cff9409f8",
".git/ORIG_HEAD": "294af779d42244b6eeb8a42d9a88057b",
".git/config": "83611f2db53ffec164a3428f29e32315",
".git/objects/0d/0df08f7c3e147a8ae36017cf81a96e35b73717": "106e868f28a72727fb6fb0fa71123633",
".git/objects/57/3f136d6839ae1ccc2c1dcce8290441a9bf6fea": "d799f5877c0daf2bbe0f8f5f942e285e",
".git/objects/0b/64b3452e48a2a1c8ef544abdc3ef581b90c098": "382ae1e66ba1b6705b78694423d3c898",
".git/objects/b2/53f178304e67e1db6de40dcba41ab550bfb4cd": "798058d49ad6c623e784ab6ef03b00a2",
".git/objects/ac/9a0a72d69c673ff064e9a38411f8052e6944fd": "1eaf6cd052dcd19cf3bd08f2b44dee8c",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d8/94d809067a45c6a617526b8a88abbfd3d6b0df": "531c1b4e43dc66e6ec019daaf7e7cb83",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/eb/3c8454c1499348a9694df8e2ffe705348dec86": "c22742b057f5cee7df7f840379258204",
".git/objects/fc/291b7e2921ccaaaa91a53be6540745c45e4e5e": "b9fa13b5a29b5210e50021a5d20283e3",
".git/objects/fb/2a5c59ecfbf4b408a79ee6838503f9e3818d65": "8c5bcfad44bd9e2f4201ea0ce94dedc6",
".git/objects/ed/474e8315fdb90a8e810cd7743b00cce477547a": "0c3db913028480bb826bd7e4e22e11fb",
".git/objects/ec/320b8aeeec745a6bd3312a289a20a76abc6a16": "fe3aeeae099f670959e1b792e9e64874",
".git/objects/4e/89617a3696bd10c155ec378f4a65a9f89e9e3a": "d8056e20bae90d092b619c895129e982",
".git/objects/4e/6c60c2f4ede2b90f7d44a214df00dd66bafe38": "423e91e056d2e69b513a55e50c2a7e87",
".git/objects/29/2214367c0af9a2eee8f873b2944224e2fe3f0c": "902d6cf3d5ea70392a74bfc9ded583bb",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/7e/48e11f264cfab8380c6333de84eeda605d5306": "26af4ec547b8936ea3ef35bc04cc8d6e",
".git/objects/26/3fe7e95bf6ebae32fea81ba698252335cfd36a": "d80af2ce102284a7cbcea713d9098d47",
".git/objects/86/f15ee1739e30bb4d105d12a6d1d0dcda391caf": "1439e4601cf5866a85efacf722517c41",
".git/objects/2a/960fe87a64ad08a42e62b68c2bd7ff7e38d729": "71e73a76bbbebe71259b062ac083f5ac",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/36/fc0997ad783321d0af1775b46c2bcc541e5abb": "9b0a039e1a9e6a3305b1e2cffd8a604e",
".git/objects/5d/2d2f2dbb32b3c029e0682dc82100285f487066": "dc868008acff19b9dc951fc720d03ee1",
".git/objects/a9/ecad857e1ffa0dcf3f21a1fab95f8ce2745485": "28ace38084dcf049cd63e5e0af2a111e",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/de/28db843d7df6ed23b8a7526f6b6b4a83425fe7": "797e4f7b3d8dced098c51679ff33e848",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/b9/72837efaa9b3d918591aeb236c730525f9cd46": "a7789c8c5a769a8f47a1182c79b2e933",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/cd/22076013ce8b84475eae9bb4cd6c60b5460fbe": "81c620e2d6cbe5638d6c90ee25886389",
".git/objects/c5/d5acf9a7701fa31456809076a2706cb5d317e3": "9f9ff913885f24035cf64cd86dfc9f6b",
".git/objects/e9/e575d0b36ebd696294496017834c26b62e1505": "8eca52e53d59927cc7c00a13888ea67b",
".git/objects/e9/830c7c5f82dff10ab111f7f3d88e420241dc0f": "0341ad1cb3d171bda256cadfa70dca6b",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/2d/cf3542c874e33cd8ab86ceb6f0ec444228aa78": "66baad0ae5d874f09b6eee790095bc65",
".git/objects/1b/55206bf45f4c46afae2d8ba6f6a849672290c7": "3ffaaa1a35c9b2089540925eb2cd79de",
".git/objects/70/cd877dd9791864c599010c3fe0695527f3797d": "ec6c008be19958f3c588637d520b79b7",
".git/objects/1e/0ed34f8cf18d5e7da0386c8e176caf7bf52409": "fd13793c6213179b972759c8073bbb1c",
".git/objects/24/b1f14dd348b07c9b8373758bde9ac14d16fd92": "dbf45d6c044044561758a334420e9569",
".git/objects/4f/2f2f4ec0a9a107f5d1b5440c2b898569c79df3": "e3ccd9965a70af775a656feb738bc680",
".git/objects/4f/4859b24d660e3f473f088c90000663b0bad508": "b10b169cf2441e0045f302f4153670a0",
".git/objects/76/30e261a31bd6c0bddaa581fe4801dc8fcea493": "eb882d9c6cf46ea27cebfebbf458b037",
".git/objects/76/8651b2e249c2517c7b37bdbeea0a5d8bfbb707": "495b1c4fefa633f6afe4dc5840ebe18f",
".git/objects/1c/9940b04f2e2055f748a014718a853ad7061167": "c3e3038b4a7e0463a3d5ce67af80c323",
".git/objects/2b/dabe10d200e5edc5cac2cfedc9c3a4009db45b": "50d4f724c6de6599ba6cdb43fc052025",
".git/objects/8e/62a7cb3e0cb13bf26c973fb0be05994d6b6528": "c94c458a01189908d71de0d6e2d13274",
".git/objects/25/bc3a233f040158f7d030aff6aae262fba23007": "d08036896d5bc357c475c6c33fcaf39e",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "f7ef8aa377466209d5f8217625681bc3",
".git/logs/refs/heads/main": "8828ed942dff08c39c9efb55ee10c2ab",
".git/logs/refs/remotes/origin/main": "883bc4ce35a7acaca07f73683c41f1e6",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/refs/heads/main": "294af779d42244b6eeb8a42d9a88057b",
".git/refs/remotes/origin/main": "497f9a5fb67690e5f97ae8d304aa9e39",
".git/index": "b28f74e1058a3d27e8d38b9954ac8fd2",
".git/COMMIT_EDITMSG": "01d8dbbeb2e678cdbca8ff34dec3601f",
".git/FETCH_HEAD": "23768dda55dbb1a5e40fa59829b51223",
"assets/AssetManifest.json": "0db05c3e3254eb68ff0ce2d88c02c519",
"assets/NOTICES": "2a9a851586f7afd14d3ba6d8c77da231",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"assets/assets/protein-shake.png": "9a36b1547efb099f343e98e02a88f6d4",
"assets/assets/shopee.png": "8b68b8d2552efd17893c0810ecb17711",
"assets/assets/shopeepay.png": "e98922fca157f7181ea9b7a743634275",
"assets/assets/vitamin.png": "f23e052287c1a67e782cf57def725437",
"assets/assets/socks.png": "cb929c99bd002846801f263ed3b32296",
"assets/assets/shopeepayexperience.png": "78520347092b06234bfbcd1cdc5e1b95",
"assets/assets/energy-bar.png": "f7b68f79ebb55c892bc2fe4c1e7be9bd",
"assets/assets/crewneck.png": "0d7c2dd325d59d2d85b2218cef4e7fd5",
"assets/assets/whey-protein.png": "21fb18af118cb452e7d9c84af36d0eba",
"canvaskit/canvaskit.js": "c2b4e5f3d7a3d82aed024e7249a78487",
"canvaskit/profiling/canvaskit.js": "ae2949af4efc61d28a4a80fffa1db900",
"canvaskit/profiling/canvaskit.wasm": "95e736ab31147d1b2c7b25f11d4c32cd",
"canvaskit/canvaskit.wasm": "4b83d89d9fecbea8ca46f2f760c5a9ba"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
"assets/NOTICES",
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
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
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
