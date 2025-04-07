/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "app/api/contact/route";
exports.ids = ["app/api/contact/route"];
exports.modules = {

/***/ "(rsc)/./app/api/contact/route.ts":
/*!**********************************!*\
  !*** ./app/api/contact/route.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   POST: () => (/* binding */ POST)\n/* harmony export */ });\n/* harmony import */ var next_server__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/server */ \"(rsc)/./node_modules/next/dist/api/server.js\");\n/* harmony import */ var nodemailer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! nodemailer */ \"(rsc)/./node_modules/nodemailer/lib/nodemailer.js\");\n\n\nasync function POST(request) {\n    // Debug log - remove in production!\n    console.log(\"Environment variables loaded:\", {\n        host: process.env.EMAIL_HOST,\n        port: process.env.EMAIL_PORT,\n        secure: process.env.EMAIL_SECURE,\n        user: process.env.EMAIL_USER ? \"***Set***\" : \"MISSING\",\n        pass: process.env.EMAIL_PASSWORD ? \"***Set***\" : \"MISSING\",\n        from: process.env.EMAIL_FROM,\n        to: process.env.EMAIL_TO || 'test.example.com'\n    });\n    try {\n        const body = await request.json();\n        const { name, email, faculty, message } = body;\n        // Configure email transporter\n        const transporter = nodemailer__WEBPACK_IMPORTED_MODULE_1__.createTransport({\n            host: process.env.EMAIL_HOST,\n            port: Number(process.env.EMAIL_PORT),\n            secure: false,\n            auth: {\n                user: process.env.EMAIL_USER,\n                pass: process.env.EMAIL_PASSWORD\n            }\n        });\n        // Email content\n        const mailOptions = {\n            from: process.env.EMAIL_FROM,\n            to: process.env.EMAIL_TO,\n            subject: `New Contact Form Submission from ${name}`,\n            text: `Name: ${name}\\n` + `Email: ${email}\\n` + `Faculty: ${faculty}\\n\\n` + `Message:\\n${message}`,\n            html: `\n        <h2>New Contact Form Submission</h2>\n        <p><strong>Name:</strong> ${name}</p>\n        <p><strong>Email:</strong> ${email}</p>\n        <p><strong>Faculty:</strong> ${faculty}</p>\n        <p><strong>Message:</strong></p>\n        <p>${message.replace(/\\n/g, '<br>')}</p>\n      `\n        };\n        // Send the email\n        await transporter.sendMail(mailOptions);\n        return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n            message: 'Email sent successfully'\n        }, {\n            status: 200\n        });\n    } catch (error) {\n        console.error('Error sending email:', error);\n        return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n            error: 'Failed to send email'\n        }, {\n            status: 500\n        });\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9hcHAvYXBpL2NvbnRhY3Qvcm91dGUudHMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQTJDO0FBQ1A7QUFFN0IsZUFBZUUsS0FBS0MsT0FBZ0I7SUFDekMsb0NBQW9DO0lBQ3BDQyxRQUFRQyxHQUFHLENBQUMsaUNBQWlDO1FBQzNDQyxNQUFNQyxRQUFRQyxHQUFHLENBQUNDLFVBQVU7UUFDNUJDLE1BQU1ILFFBQVFDLEdBQUcsQ0FBQ0csVUFBVTtRQUM1QkMsUUFBUUwsUUFBUUMsR0FBRyxDQUFDSyxZQUFZO1FBQ2hDQyxNQUFNUCxRQUFRQyxHQUFHLENBQUNPLFVBQVUsR0FBRyxjQUFjO1FBQzdDQyxNQUFNVCxRQUFRQyxHQUFHLENBQUNTLGNBQWMsR0FBRyxjQUFjO1FBQ2pEQyxNQUFNWCxRQUFRQyxHQUFHLENBQUNXLFVBQVU7UUFDNUJDLElBQUliLFFBQVFDLEdBQUcsQ0FBQ2EsUUFBUSxJQUFJO0lBQzlCO0lBRUEsSUFBSTtRQUNGLE1BQU1DLE9BQU8sTUFBTW5CLFFBQVFvQixJQUFJO1FBQy9CLE1BQU0sRUFBRUMsSUFBSSxFQUFFQyxLQUFLLEVBQUVDLE9BQU8sRUFBRUMsT0FBTyxFQUFFLEdBQUdMO1FBRTFDLDhCQUE4QjtRQUM5QixNQUFNTSxjQUFjM0IsdURBQTBCLENBQUM7WUFDN0NLLE1BQU1DLFFBQVFDLEdBQUcsQ0FBQ0MsVUFBVTtZQUM1QkMsTUFBTW9CLE9BQU92QixRQUFRQyxHQUFHLENBQUNHLFVBQVU7WUFDbkNDLFFBQVE7WUFDUm1CLE1BQU07Z0JBQ0pqQixNQUFNUCxRQUFRQyxHQUFHLENBQUNPLFVBQVU7Z0JBQzVCQyxNQUFNVCxRQUFRQyxHQUFHLENBQUNTLGNBQWM7WUFDbEM7UUFDRjtRQUVBLGdCQUFnQjtRQUNoQixNQUFNZSxjQUFjO1lBQ2xCZCxNQUFNWCxRQUFRQyxHQUFHLENBQUNXLFVBQVU7WUFDNUJDLElBQUliLFFBQVFDLEdBQUcsQ0FBQ2EsUUFBUTtZQUN4QlksU0FBUyxDQUFDLGlDQUFpQyxFQUFFVCxNQUFNO1lBQ25EVSxNQUNFLENBQUMsTUFBTSxFQUFFVixLQUFLLEVBQUUsQ0FBQyxHQUNqQixDQUFDLE9BQU8sRUFBRUMsTUFBTSxFQUFFLENBQUMsR0FDbkIsQ0FBQyxTQUFTLEVBQUVDLFFBQVEsSUFBSSxDQUFDLEdBQ3pCLENBQUMsVUFBVSxFQUFFQyxTQUFTO1lBQ3hCUSxNQUFNLENBQUM7O2tDQUVxQixFQUFFWCxLQUFLO21DQUNOLEVBQUVDLE1BQU07cUNBQ04sRUFBRUMsUUFBUTs7V0FFcEMsRUFBRUMsUUFBUVMsT0FBTyxDQUFDLE9BQU8sUUFBUTtNQUN0QyxDQUFDO1FBQ0g7UUFFQSxpQkFBaUI7UUFDakIsTUFBTVIsWUFBWVMsUUFBUSxDQUFDTDtRQUUzQixPQUFPaEMscURBQVlBLENBQUN1QixJQUFJLENBQ3RCO1lBQUVJLFNBQVM7UUFBMEIsR0FDckM7WUFBRVcsUUFBUTtRQUFJO0lBRWxCLEVBQUUsT0FBT0MsT0FBTztRQUNkbkMsUUFBUW1DLEtBQUssQ0FBQyx3QkFBd0JBO1FBQ3RDLE9BQU92QyxxREFBWUEsQ0FBQ3VCLElBQUksQ0FDdEI7WUFBRWdCLE9BQU87UUFBdUIsR0FDaEM7WUFBRUQsUUFBUTtRQUFJO0lBRWxCO0FBQ0YiLCJzb3VyY2VzIjpbIi9Vc2Vycy9mdXl1a2ltYXRzdWJhcmEvZGV2ZWxvcG1lbnQvYXJyb3doZWFkcy1jb3Jwb3JhdGUvYXBwL2FwaS9jb250YWN0L3JvdXRlLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5leHRSZXNwb25zZSB9IGZyb20gJ25leHQvc2VydmVyJztcbmltcG9ydCBub2RlbWFpbGVyIGZyb20gJ25vZGVtYWlsZXInO1xuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gUE9TVChyZXF1ZXN0OiBSZXF1ZXN0KSB7XG4gIC8vIERlYnVnIGxvZyAtIHJlbW92ZSBpbiBwcm9kdWN0aW9uIVxuICBjb25zb2xlLmxvZyhcIkVudmlyb25tZW50IHZhcmlhYmxlcyBsb2FkZWQ6XCIsIHtcbiAgICBob3N0OiBwcm9jZXNzLmVudi5FTUFJTF9IT1NULFxuICAgIHBvcnQ6IHByb2Nlc3MuZW52LkVNQUlMX1BPUlQsXG4gICAgc2VjdXJlOiBwcm9jZXNzLmVudi5FTUFJTF9TRUNVUkUsXG4gICAgdXNlcjogcHJvY2Vzcy5lbnYuRU1BSUxfVVNFUiA/IFwiKioqU2V0KioqXCIgOiBcIk1JU1NJTkdcIixcbiAgICBwYXNzOiBwcm9jZXNzLmVudi5FTUFJTF9QQVNTV09SRCA/IFwiKioqU2V0KioqXCIgOiBcIk1JU1NJTkdcIixcbiAgICBmcm9tOiBwcm9jZXNzLmVudi5FTUFJTF9GUk9NLFxuICAgIHRvOiBwcm9jZXNzLmVudi5FTUFJTF9UTyB8fCAndGVzdC5leGFtcGxlLmNvbScsXG4gIH0pO1xuXG4gIHRyeSB7XG4gICAgY29uc3QgYm9keSA9IGF3YWl0IHJlcXVlc3QuanNvbigpO1xuICAgIGNvbnN0IHsgbmFtZSwgZW1haWwsIGZhY3VsdHksIG1lc3NhZ2UgfSA9IGJvZHk7XG5cbiAgICAvLyBDb25maWd1cmUgZW1haWwgdHJhbnNwb3J0ZXJcbiAgICBjb25zdCB0cmFuc3BvcnRlciA9IG5vZGVtYWlsZXIuY3JlYXRlVHJhbnNwb3J0KHtcbiAgICAgIGhvc3Q6IHByb2Nlc3MuZW52LkVNQUlMX0hPU1QsXG4gICAgICBwb3J0OiBOdW1iZXIocHJvY2Vzcy5lbnYuRU1BSUxfUE9SVCksXG4gICAgICBzZWN1cmU6IGZhbHNlLFxuICAgICAgYXV0aDoge1xuICAgICAgICB1c2VyOiBwcm9jZXNzLmVudi5FTUFJTF9VU0VSLFxuICAgICAgICBwYXNzOiBwcm9jZXNzLmVudi5FTUFJTF9QQVNTV09SRCxcbiAgICAgIH0sXG4gICAgfSk7XG5cbiAgICAvLyBFbWFpbCBjb250ZW50XG4gICAgY29uc3QgbWFpbE9wdGlvbnMgPSB7XG4gICAgICBmcm9tOiBwcm9jZXNzLmVudi5FTUFJTF9GUk9NLFxuICAgICAgdG86IHByb2Nlc3MuZW52LkVNQUlMX1RPLFxuICAgICAgc3ViamVjdDogYE5ldyBDb250YWN0IEZvcm0gU3VibWlzc2lvbiBmcm9tICR7bmFtZX1gLFxuICAgICAgdGV4dDogXG4gICAgICAgIGBOYW1lOiAke25hbWV9XFxuYCArXG4gICAgICAgIGBFbWFpbDogJHtlbWFpbH1cXG5gICtcbiAgICAgICAgYEZhY3VsdHk6ICR7ZmFjdWx0eX1cXG5cXG5gICtcbiAgICAgICAgYE1lc3NhZ2U6XFxuJHttZXNzYWdlfWAsXG4gICAgICBodG1sOiBgXG4gICAgICAgIDxoMj5OZXcgQ29udGFjdCBGb3JtIFN1Ym1pc3Npb248L2gyPlxuICAgICAgICA8cD48c3Ryb25nPk5hbWU6PC9zdHJvbmc+ICR7bmFtZX08L3A+XG4gICAgICAgIDxwPjxzdHJvbmc+RW1haWw6PC9zdHJvbmc+ICR7ZW1haWx9PC9wPlxuICAgICAgICA8cD48c3Ryb25nPkZhY3VsdHk6PC9zdHJvbmc+ICR7ZmFjdWx0eX08L3A+XG4gICAgICAgIDxwPjxzdHJvbmc+TWVzc2FnZTo8L3N0cm9uZz48L3A+XG4gICAgICAgIDxwPiR7bWVzc2FnZS5yZXBsYWNlKC9cXG4vZywgJzxicj4nKX08L3A+XG4gICAgICBgLFxuICAgIH07XG5cbiAgICAvLyBTZW5kIHRoZSBlbWFpbFxuICAgIGF3YWl0IHRyYW5zcG9ydGVyLnNlbmRNYWlsKG1haWxPcHRpb25zKTtcbiAgICBcbiAgICByZXR1cm4gTmV4dFJlc3BvbnNlLmpzb24oXG4gICAgICB7IG1lc3NhZ2U6ICdFbWFpbCBzZW50IHN1Y2Nlc3NmdWxseScgfSxcbiAgICAgIHsgc3RhdHVzOiAyMDAgfVxuICAgICk7XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgY29uc29sZS5lcnJvcignRXJyb3Igc2VuZGluZyBlbWFpbDonLCBlcnJvcik7XG4gICAgcmV0dXJuIE5leHRSZXNwb25zZS5qc29uKFxuICAgICAgeyBlcnJvcjogJ0ZhaWxlZCB0byBzZW5kIGVtYWlsJyB9LFxuICAgICAgeyBzdGF0dXM6IDUwMCB9XG4gICAgKTtcbiAgfVxufSAiXSwibmFtZXMiOlsiTmV4dFJlc3BvbnNlIiwibm9kZW1haWxlciIsIlBPU1QiLCJyZXF1ZXN0IiwiY29uc29sZSIsImxvZyIsImhvc3QiLCJwcm9jZXNzIiwiZW52IiwiRU1BSUxfSE9TVCIsInBvcnQiLCJFTUFJTF9QT1JUIiwic2VjdXJlIiwiRU1BSUxfU0VDVVJFIiwidXNlciIsIkVNQUlMX1VTRVIiLCJwYXNzIiwiRU1BSUxfUEFTU1dPUkQiLCJmcm9tIiwiRU1BSUxfRlJPTSIsInRvIiwiRU1BSUxfVE8iLCJib2R5IiwianNvbiIsIm5hbWUiLCJlbWFpbCIsImZhY3VsdHkiLCJtZXNzYWdlIiwidHJhbnNwb3J0ZXIiLCJjcmVhdGVUcmFuc3BvcnQiLCJOdW1iZXIiLCJhdXRoIiwibWFpbE9wdGlvbnMiLCJzdWJqZWN0IiwidGV4dCIsImh0bWwiLCJyZXBsYWNlIiwic2VuZE1haWwiLCJzdGF0dXMiLCJlcnJvciJdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./app/api/contact/route.ts\n");

/***/ }),

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fcontact%2Froute&page=%2Fapi%2Fcontact%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fcontact%2Froute.ts&appDir=%2FUsers%2Ffuyukimatsubara%2Fdevelopment%2Farrowheads-corporate%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Ffuyukimatsubara%2Fdevelopment%2Farrowheads-corporate&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fcontact%2Froute&page=%2Fapi%2Fcontact%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fcontact%2Froute.ts&appDir=%2FUsers%2Ffuyukimatsubara%2Fdevelopment%2Farrowheads-corporate%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Ffuyukimatsubara%2Fdevelopment%2Farrowheads-corporate&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D! ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   patchFetch: () => (/* binding */ patchFetch),\n/* harmony export */   routeModule: () => (/* binding */ routeModule),\n/* harmony export */   serverHooks: () => (/* binding */ serverHooks),\n/* harmony export */   workAsyncStorage: () => (/* binding */ workAsyncStorage),\n/* harmony export */   workUnitAsyncStorage: () => (/* binding */ workUnitAsyncStorage)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/route-modules/app-route/module.compiled */ \"(rsc)/./node_modules/next/dist/server/route-modules/app-route/module.compiled.js\");\n/* harmony import */ var next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/route-kind */ \"(rsc)/./node_modules/next/dist/server/route-kind.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/server/lib/patch-fetch */ \"(rsc)/./node_modules/next/dist/server/lib/patch-fetch.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _Users_fuyukimatsubara_development_arrowheads_corporate_app_api_contact_route_ts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/api/contact/route.ts */ \"(rsc)/./app/api/contact/route.ts\");\n\n\n\n\n// We inject the nextConfigOutput here so that we can use them in the route\n// module.\nconst nextConfigOutput = \"\"\nconst routeModule = new next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__.AppRouteRouteModule({\n    definition: {\n        kind: next_dist_server_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.APP_ROUTE,\n        page: \"/api/contact/route\",\n        pathname: \"/api/contact\",\n        filename: \"route\",\n        bundlePath: \"app/api/contact/route\"\n    },\n    resolvedPagePath: \"/Users/fuyukimatsubara/development/arrowheads-corporate/app/api/contact/route.ts\",\n    nextConfigOutput,\n    userland: _Users_fuyukimatsubara_development_arrowheads_corporate_app_api_contact_route_ts__WEBPACK_IMPORTED_MODULE_3__\n});\n// Pull out the exports that we need to expose from the module. This should\n// be eliminated when we've moved the other routes to the new format. These\n// are used to hook into the route.\nconst { workAsyncStorage, workUnitAsyncStorage, serverHooks } = routeModule;\nfunction patchFetch() {\n    return (0,next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__.patchFetch)({\n        workAsyncStorage,\n        workUnitAsyncStorage\n    });\n}\n\n\n//# sourceMappingURL=app-route.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWFwcC1sb2FkZXIvaW5kZXguanM/bmFtZT1hcHAlMkZhcGklMkZjb250YWN0JTJGcm91dGUmcGFnZT0lMkZhcGklMkZjb250YWN0JTJGcm91dGUmYXBwUGF0aHM9JnBhZ2VQYXRoPXByaXZhdGUtbmV4dC1hcHAtZGlyJTJGYXBpJTJGY29udGFjdCUyRnJvdXRlLnRzJmFwcERpcj0lMkZVc2VycyUyRmZ1eXVraW1hdHN1YmFyYSUyRmRldmVsb3BtZW50JTJGYXJyb3doZWFkcy1jb3Jwb3JhdGUlMkZhcHAmcGFnZUV4dGVuc2lvbnM9dHN4JnBhZ2VFeHRlbnNpb25zPXRzJnBhZ2VFeHRlbnNpb25zPWpzeCZwYWdlRXh0ZW5zaW9ucz1qcyZyb290RGlyPSUyRlVzZXJzJTJGZnV5dWtpbWF0c3ViYXJhJTJGZGV2ZWxvcG1lbnQlMkZhcnJvd2hlYWRzLWNvcnBvcmF0ZSZpc0Rldj10cnVlJnRzY29uZmlnUGF0aD10c2NvbmZpZy5qc29uJmJhc2VQYXRoPSZhc3NldFByZWZpeD0mbmV4dENvbmZpZ091dHB1dD0mcHJlZmVycmVkUmVnaW9uPSZtaWRkbGV3YXJlQ29uZmlnPWUzMCUzRCEiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBK0Y7QUFDdkM7QUFDcUI7QUFDZ0M7QUFDN0c7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLHlHQUFtQjtBQUMzQztBQUNBLGNBQWMsa0VBQVM7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLFlBQVk7QUFDWixDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0EsUUFBUSxzREFBc0Q7QUFDOUQ7QUFDQSxXQUFXLDRFQUFXO0FBQ3RCO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDMEY7O0FBRTFGIiwic291cmNlcyI6WyIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQXBwUm91dGVSb3V0ZU1vZHVsZSB9IGZyb20gXCJuZXh0L2Rpc3Qvc2VydmVyL3JvdXRlLW1vZHVsZXMvYXBwLXJvdXRlL21vZHVsZS5jb21waWxlZFwiO1xuaW1wb3J0IHsgUm91dGVLaW5kIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvcm91dGUta2luZFwiO1xuaW1wb3J0IHsgcGF0Y2hGZXRjaCBhcyBfcGF0Y2hGZXRjaCB9IGZyb20gXCJuZXh0L2Rpc3Qvc2VydmVyL2xpYi9wYXRjaC1mZXRjaFwiO1xuaW1wb3J0ICogYXMgdXNlcmxhbmQgZnJvbSBcIi9Vc2Vycy9mdXl1a2ltYXRzdWJhcmEvZGV2ZWxvcG1lbnQvYXJyb3doZWFkcy1jb3Jwb3JhdGUvYXBwL2FwaS9jb250YWN0L3JvdXRlLnRzXCI7XG4vLyBXZSBpbmplY3QgdGhlIG5leHRDb25maWdPdXRwdXQgaGVyZSBzbyB0aGF0IHdlIGNhbiB1c2UgdGhlbSBpbiB0aGUgcm91dGVcbi8vIG1vZHVsZS5cbmNvbnN0IG5leHRDb25maWdPdXRwdXQgPSBcIlwiXG5jb25zdCByb3V0ZU1vZHVsZSA9IG5ldyBBcHBSb3V0ZVJvdXRlTW9kdWxlKHtcbiAgICBkZWZpbml0aW9uOiB7XG4gICAgICAgIGtpbmQ6IFJvdXRlS2luZC5BUFBfUk9VVEUsXG4gICAgICAgIHBhZ2U6IFwiL2FwaS9jb250YWN0L3JvdXRlXCIsXG4gICAgICAgIHBhdGhuYW1lOiBcIi9hcGkvY29udGFjdFwiLFxuICAgICAgICBmaWxlbmFtZTogXCJyb3V0ZVwiLFxuICAgICAgICBidW5kbGVQYXRoOiBcImFwcC9hcGkvY29udGFjdC9yb3V0ZVwiXG4gICAgfSxcbiAgICByZXNvbHZlZFBhZ2VQYXRoOiBcIi9Vc2Vycy9mdXl1a2ltYXRzdWJhcmEvZGV2ZWxvcG1lbnQvYXJyb3doZWFkcy1jb3Jwb3JhdGUvYXBwL2FwaS9jb250YWN0L3JvdXRlLnRzXCIsXG4gICAgbmV4dENvbmZpZ091dHB1dCxcbiAgICB1c2VybGFuZFxufSk7XG4vLyBQdWxsIG91dCB0aGUgZXhwb3J0cyB0aGF0IHdlIG5lZWQgdG8gZXhwb3NlIGZyb20gdGhlIG1vZHVsZS4gVGhpcyBzaG91bGRcbi8vIGJlIGVsaW1pbmF0ZWQgd2hlbiB3ZSd2ZSBtb3ZlZCB0aGUgb3RoZXIgcm91dGVzIHRvIHRoZSBuZXcgZm9ybWF0LiBUaGVzZVxuLy8gYXJlIHVzZWQgdG8gaG9vayBpbnRvIHRoZSByb3V0ZS5cbmNvbnN0IHsgd29ya0FzeW5jU3RvcmFnZSwgd29ya1VuaXRBc3luY1N0b3JhZ2UsIHNlcnZlckhvb2tzIH0gPSByb3V0ZU1vZHVsZTtcbmZ1bmN0aW9uIHBhdGNoRmV0Y2goKSB7XG4gICAgcmV0dXJuIF9wYXRjaEZldGNoKHtcbiAgICAgICAgd29ya0FzeW5jU3RvcmFnZSxcbiAgICAgICAgd29ya1VuaXRBc3luY1N0b3JhZ2VcbiAgICB9KTtcbn1cbmV4cG9ydCB7IHJvdXRlTW9kdWxlLCB3b3JrQXN5bmNTdG9yYWdlLCB3b3JrVW5pdEFzeW5jU3RvcmFnZSwgc2VydmVySG9va3MsIHBhdGNoRmV0Y2gsICB9O1xuXG4vLyMgc291cmNlTWFwcGluZ1VSTD1hcHAtcm91dGUuanMubWFwIl0sIm5hbWVzIjpbXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fcontact%2Froute&page=%2Fapi%2Fcontact%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fcontact%2Froute.ts&appDir=%2FUsers%2Ffuyukimatsubara%2Fdevelopment%2Farrowheads-corporate%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Ffuyukimatsubara%2Fdevelopment%2Farrowheads-corporate&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!\n");

/***/ }),

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?server=true!":
/*!******************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?server=true! ***!
  \******************************************************************************************************/
/***/ (() => {



/***/ }),

/***/ "(ssr)/./node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?server=true!":
/*!******************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?server=true! ***!
  \******************************************************************************************************/
/***/ (() => {



/***/ }),

/***/ "../app-render/after-task-async-storage.external":
/*!***********************************************************************************!*\
  !*** external "next/dist/server/app-render/after-task-async-storage.external.js" ***!
  \***********************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/app-render/after-task-async-storage.external.js");

/***/ }),

/***/ "../app-render/work-async-storage.external":
/*!*****************************************************************************!*\
  !*** external "next/dist/server/app-render/work-async-storage.external.js" ***!
  \*****************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/app-render/work-async-storage.external.js");

/***/ }),

/***/ "./work-unit-async-storage.external":
/*!**********************************************************************************!*\
  !*** external "next/dist/server/app-render/work-unit-async-storage.external.js" ***!
  \**********************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/app-render/work-unit-async-storage.external.js");

/***/ }),

/***/ "child_process":
/*!********************************!*\
  !*** external "child_process" ***!
  \********************************/
/***/ ((module) => {

"use strict";
module.exports = require("child_process");

/***/ }),

/***/ "crypto":
/*!*************************!*\
  !*** external "crypto" ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = require("crypto");

/***/ }),

/***/ "dns":
/*!**********************!*\
  !*** external "dns" ***!
  \**********************/
/***/ ((module) => {

"use strict";
module.exports = require("dns");

/***/ }),

/***/ "events":
/*!*************************!*\
  !*** external "events" ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = require("events");

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/***/ ((module) => {

"use strict";
module.exports = require("fs");

/***/ }),

/***/ "http":
/*!***********************!*\
  !*** external "http" ***!
  \***********************/
/***/ ((module) => {

"use strict";
module.exports = require("http");

/***/ }),

/***/ "https":
/*!************************!*\
  !*** external "https" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("https");

/***/ }),

/***/ "net":
/*!**********************!*\
  !*** external "net" ***!
  \**********************/
/***/ ((module) => {

"use strict";
module.exports = require("net");

/***/ }),

/***/ "next/dist/compiled/next-server/app-page.runtime.dev.js":
/*!*************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-page.runtime.dev.js" ***!
  \*************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/compiled/next-server/app-page.runtime.dev.js");

/***/ }),

/***/ "next/dist/compiled/next-server/app-route.runtime.dev.js":
/*!**************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-route.runtime.dev.js" ***!
  \**************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/compiled/next-server/app-route.runtime.dev.js");

/***/ }),

/***/ "os":
/*!*********************!*\
  !*** external "os" ***!
  \*********************/
/***/ ((module) => {

"use strict";
module.exports = require("os");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/***/ ((module) => {

"use strict";
module.exports = require("path");

/***/ }),

/***/ "stream":
/*!*************************!*\
  !*** external "stream" ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = require("stream");

/***/ }),

/***/ "tls":
/*!**********************!*\
  !*** external "tls" ***!
  \**********************/
/***/ ((module) => {

"use strict";
module.exports = require("tls");

/***/ }),

/***/ "url":
/*!**********************!*\
  !*** external "url" ***!
  \**********************/
/***/ ((module) => {

"use strict";
module.exports = require("url");

/***/ }),

/***/ "util":
/*!***********************!*\
  !*** external "util" ***!
  \***********************/
/***/ ((module) => {

"use strict";
module.exports = require("util");

/***/ }),

/***/ "zlib":
/*!***********************!*\
  !*** external "zlib" ***!
  \***********************/
/***/ ((module) => {

"use strict";
module.exports = require("zlib");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next","vendor-chunks/nodemailer"], () => (__webpack_exec__("(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fcontact%2Froute&page=%2Fapi%2Fcontact%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fcontact%2Froute.ts&appDir=%2FUsers%2Ffuyukimatsubara%2Fdevelopment%2Farrowheads-corporate%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Ffuyukimatsubara%2Fdevelopment%2Farrowheads-corporate&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!")));
module.exports = __webpack_exports__;

})();