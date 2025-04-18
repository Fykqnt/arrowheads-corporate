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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   POST: () => (/* binding */ POST)\n/* harmony export */ });\n/* harmony import */ var next_server__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/server */ \"(rsc)/./node_modules/next/dist/api/server.js\");\n/* harmony import */ var resend__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! resend */ \"(rsc)/./node_modules/resend/dist/index.mjs\");\n\n\nasync function POST(request) {\n    try {\n        const body = await request.json();\n        const { name, email, faculty, message } = body;\n        // Basic server-side validation\n        if (!name || !email || !faculty || !message) {\n            return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n                error: 'All fields are required'\n            }, {\n                status: 400\n            });\n        }\n        // Initialize Resend\n        const resend = new resend__WEBPACK_IMPORTED_MODULE_1__.Resend(process.env.RESEND_API_KEY);\n        // Send email using Resend\n        const { data, error } = await resend.emails.send({\n            from: 'お問い合わせ <info@arrowheads.co.jp>',\n            to: 'info@arrowheads.co.jp',\n            subject: `新規お問い合わせがありました`,\n            replyTo: email,\n            text: `Name: ${name}\\n` + `Email: ${email}\\n` + `Faculty: ${faculty}\\n\\n` + `Message:\\n${message}`,\n            html: `\n        <div style=\"font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;\">\n          <h2 style=\"color: #4a5568; border-bottom: 1px solid #e2e8f0; padding-bottom: 10px;\">New Contact Form Submission</h2>\n          \n          <div style=\"margin: 20px 0;\">\n            <p><strong>Name:</strong> ${name}</p>\n            <p><strong>Email:</strong> <a href=\"mailto:${email}\">${email}</a></p>\n            <p><strong>Faculty:</strong> ${faculty}</p>\n          </div>\n          \n          <div style=\"background-color: #f7fafc; padding: 15px; border-radius: 5px; margin-top: 20px;\">\n            <h3 style=\"color: #4a5568; margin-top: 0;\">Message:</h3>\n            <p style=\"white-space: pre-wrap;\">${message.replace(/\\n/g, '<br>')}</p>\n          </div>\n          \n          <div style=\"margin-top: 30px; font-size: 12px; color: #718096; border-top: 1px solid #e2e8f0; padding-top: 10px;\">\n            <p>This is an automated email from your website contact form.</p>\n          </div>\n        </div>\n      `\n        });\n        if (error) {\n            console.error('Error sending email with Resend:', error);\n            return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n                error: 'Failed to send email'\n            }, {\n                status: 500\n            });\n        }\n        return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n            message: 'Email sent successfully',\n            id: data?.id\n        }, {\n            status: 200\n        });\n    } catch (error) {\n        console.error('Error sending email:', error);\n        return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n            error: 'Failed to send email'\n        }, {\n            status: 500\n        });\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9hcHAvYXBpL2NvbnRhY3Qvcm91dGUudHMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQTJDO0FBQ1g7QUFFekIsZUFBZUUsS0FBS0MsT0FBZ0I7SUFDekMsSUFBSTtRQUNGLE1BQU1DLE9BQU8sTUFBTUQsUUFBUUUsSUFBSTtRQUMvQixNQUFNLEVBQUVDLElBQUksRUFBRUMsS0FBSyxFQUFFQyxPQUFPLEVBQUVDLE9BQU8sRUFBRSxHQUFHTDtRQUUxQywrQkFBK0I7UUFDL0IsSUFBSSxDQUFDRSxRQUFRLENBQUNDLFNBQVMsQ0FBQ0MsV0FBVyxDQUFDQyxTQUFTO1lBQzNDLE9BQU9ULHFEQUFZQSxDQUFDSyxJQUFJLENBQ3RCO2dCQUFFSyxPQUFPO1lBQTBCLEdBQ25DO2dCQUFFQyxRQUFRO1lBQUk7UUFFbEI7UUFFQSxvQkFBb0I7UUFDcEIsTUFBTUMsU0FBUyxJQUFJWCwwQ0FBTUEsQ0FBQ1ksUUFBUUMsR0FBRyxDQUFDQyxjQUFjO1FBRXBELDBCQUEwQjtRQUMxQixNQUFNLEVBQUVDLElBQUksRUFBRU4sS0FBSyxFQUFFLEdBQUcsTUFBTUUsT0FBT0ssTUFBTSxDQUFDQyxJQUFJLENBQUM7WUFDL0NDLE1BQU07WUFDTkMsSUFBSTtZQUNKQyxTQUFTLENBQUMsY0FBYyxDQUFDO1lBQ3pCQyxTQUFTZjtZQUNUZ0IsTUFDRSxDQUFDLE1BQU0sRUFBRWpCLEtBQUssRUFBRSxDQUFDLEdBQ2pCLENBQUMsT0FBTyxFQUFFQyxNQUFNLEVBQUUsQ0FBQyxHQUNuQixDQUFDLFNBQVMsRUFBRUMsUUFBUSxJQUFJLENBQUMsR0FDekIsQ0FBQyxVQUFVLEVBQUVDLFNBQVM7WUFDeEJlLE1BQU0sQ0FBQzs7Ozs7c0NBS3lCLEVBQUVsQixLQUFLO3VEQUNVLEVBQUVDLE1BQU0sRUFBRSxFQUFFQSxNQUFNO3lDQUNoQyxFQUFFQyxRQUFROzs7Ozs4Q0FLTCxFQUFFQyxRQUFRZ0IsT0FBTyxDQUFDLE9BQU8sUUFBUTs7Ozs7OztNQU96RSxDQUFDO1FBQ0g7UUFFQSxJQUFJZixPQUFPO1lBQ1RnQixRQUFRaEIsS0FBSyxDQUFDLG9DQUFvQ0E7WUFDbEQsT0FBT1YscURBQVlBLENBQUNLLElBQUksQ0FDdEI7Z0JBQUVLLE9BQU87WUFBdUIsR0FDaEM7Z0JBQUVDLFFBQVE7WUFBSTtRQUVsQjtRQUVBLE9BQU9YLHFEQUFZQSxDQUFDSyxJQUFJLENBQ3RCO1lBQUVJLFNBQVM7WUFBMkJrQixJQUFJWCxNQUFNVztRQUFHLEdBQ25EO1lBQUVoQixRQUFRO1FBQUk7SUFFbEIsRUFBRSxPQUFPRCxPQUFPO1FBQ2RnQixRQUFRaEIsS0FBSyxDQUFDLHdCQUF3QkE7UUFDdEMsT0FBT1YscURBQVlBLENBQUNLLElBQUksQ0FDdEI7WUFBRUssT0FBTztRQUF1QixHQUNoQztZQUFFQyxRQUFRO1FBQUk7SUFFbEI7QUFDRiIsInNvdXJjZXMiOlsiL1VzZXJzL2Z1eXVraW1hdHN1YmFyYS9kZXZlbG9wbWVudC9hcnJvd2hlYWRzLWNvcnBvcmF0ZS9hcHAvYXBpL2NvbnRhY3Qvcm91dGUudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmV4dFJlc3BvbnNlIH0gZnJvbSAnbmV4dC9zZXJ2ZXInO1xuaW1wb3J0IHsgUmVzZW5kIH0gZnJvbSAncmVzZW5kJztcblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIFBPU1QocmVxdWVzdDogUmVxdWVzdCkge1xuICB0cnkge1xuICAgIGNvbnN0IGJvZHkgPSBhd2FpdCByZXF1ZXN0Lmpzb24oKTtcbiAgICBjb25zdCB7IG5hbWUsIGVtYWlsLCBmYWN1bHR5LCBtZXNzYWdlIH0gPSBib2R5O1xuXG4gICAgLy8gQmFzaWMgc2VydmVyLXNpZGUgdmFsaWRhdGlvblxuICAgIGlmICghbmFtZSB8fCAhZW1haWwgfHwgIWZhY3VsdHkgfHwgIW1lc3NhZ2UpIHtcbiAgICAgIHJldHVybiBOZXh0UmVzcG9uc2UuanNvbihcbiAgICAgICAgeyBlcnJvcjogJ0FsbCBmaWVsZHMgYXJlIHJlcXVpcmVkJyB9LFxuICAgICAgICB7IHN0YXR1czogNDAwIH1cbiAgICAgICk7XG4gICAgfVxuXG4gICAgLy8gSW5pdGlhbGl6ZSBSZXNlbmRcbiAgICBjb25zdCByZXNlbmQgPSBuZXcgUmVzZW5kKHByb2Nlc3MuZW52LlJFU0VORF9BUElfS0VZKTtcbiAgICBcbiAgICAvLyBTZW5kIGVtYWlsIHVzaW5nIFJlc2VuZFxuICAgIGNvbnN0IHsgZGF0YSwgZXJyb3IgfSA9IGF3YWl0IHJlc2VuZC5lbWFpbHMuc2VuZCh7XG4gICAgICBmcm9tOiAn44GK5ZWP44GE5ZCI44KP44GbIDxpbmZvQGFycm93aGVhZHMuY28uanA+JywgLy8gVXNpbmcgdmVyaWZpZWQgZG9tYWluIGFzIHNlbmRlclxuICAgICAgdG86ICdpbmZvQGFycm93aGVhZHMuY28uanAnLCAvLyBTZW5kaW5nIHRvIHNhbWUgYWRkcmVzc1xuICAgICAgc3ViamVjdDogYOaWsOimj+OBiuWVj+OBhOWQiOOCj+OBm+OBjOOBguOCiuOBvuOBl+OBn2AsXG4gICAgICByZXBseVRvOiBlbWFpbCwgLy8gTWFrZXMgcmVwbHlpbmcgZ28gdG8gdGhlIGZvcm0gc3VibWl0dGVyXG4gICAgICB0ZXh0OiBcbiAgICAgICAgYE5hbWU6ICR7bmFtZX1cXG5gICtcbiAgICAgICAgYEVtYWlsOiAke2VtYWlsfVxcbmAgK1xuICAgICAgICBgRmFjdWx0eTogJHtmYWN1bHR5fVxcblxcbmAgK1xuICAgICAgICBgTWVzc2FnZTpcXG4ke21lc3NhZ2V9YCxcbiAgICAgIGh0bWw6IGBcbiAgICAgICAgPGRpdiBzdHlsZT1cImZvbnQtZmFtaWx5OiBBcmlhbCwgc2Fucy1zZXJpZjsgbWF4LXdpZHRoOiA2MDBweDsgbWFyZ2luOiAwIGF1dG87XCI+XG4gICAgICAgICAgPGgyIHN0eWxlPVwiY29sb3I6ICM0YTU1Njg7IGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZTJlOGYwOyBwYWRkaW5nLWJvdHRvbTogMTBweDtcIj5OZXcgQ29udGFjdCBGb3JtIFN1Ym1pc3Npb248L2gyPlxuICAgICAgICAgIFxuICAgICAgICAgIDxkaXYgc3R5bGU9XCJtYXJnaW46IDIwcHggMDtcIj5cbiAgICAgICAgICAgIDxwPjxzdHJvbmc+TmFtZTo8L3N0cm9uZz4gJHtuYW1lfTwvcD5cbiAgICAgICAgICAgIDxwPjxzdHJvbmc+RW1haWw6PC9zdHJvbmc+IDxhIGhyZWY9XCJtYWlsdG86JHtlbWFpbH1cIj4ke2VtYWlsfTwvYT48L3A+XG4gICAgICAgICAgICA8cD48c3Ryb25nPkZhY3VsdHk6PC9zdHJvbmc+ICR7ZmFjdWx0eX08L3A+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgXG4gICAgICAgICAgPGRpdiBzdHlsZT1cImJhY2tncm91bmQtY29sb3I6ICNmN2ZhZmM7IHBhZGRpbmc6IDE1cHg7IGJvcmRlci1yYWRpdXM6IDVweDsgbWFyZ2luLXRvcDogMjBweDtcIj5cbiAgICAgICAgICAgIDxoMyBzdHlsZT1cImNvbG9yOiAjNGE1NTY4OyBtYXJnaW4tdG9wOiAwO1wiPk1lc3NhZ2U6PC9oMz5cbiAgICAgICAgICAgIDxwIHN0eWxlPVwid2hpdGUtc3BhY2U6IHByZS13cmFwO1wiPiR7bWVzc2FnZS5yZXBsYWNlKC9cXG4vZywgJzxicj4nKX08L3A+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgXG4gICAgICAgICAgPGRpdiBzdHlsZT1cIm1hcmdpbi10b3A6IDMwcHg7IGZvbnQtc2l6ZTogMTJweDsgY29sb3I6ICM3MTgwOTY7IGJvcmRlci10b3A6IDFweCBzb2xpZCAjZTJlOGYwOyBwYWRkaW5nLXRvcDogMTBweDtcIj5cbiAgICAgICAgICAgIDxwPlRoaXMgaXMgYW4gYXV0b21hdGVkIGVtYWlsIGZyb20geW91ciB3ZWJzaXRlIGNvbnRhY3QgZm9ybS48L3A+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgYCxcbiAgICB9KTtcbiAgICBcbiAgICBpZiAoZXJyb3IpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIHNlbmRpbmcgZW1haWwgd2l0aCBSZXNlbmQ6JywgZXJyb3IpO1xuICAgICAgcmV0dXJuIE5leHRSZXNwb25zZS5qc29uKFxuICAgICAgICB7IGVycm9yOiAnRmFpbGVkIHRvIHNlbmQgZW1haWwnIH0sXG4gICAgICAgIHsgc3RhdHVzOiA1MDAgfVxuICAgICAgKTtcbiAgICB9XG4gICAgXG4gICAgcmV0dXJuIE5leHRSZXNwb25zZS5qc29uKFxuICAgICAgeyBtZXNzYWdlOiAnRW1haWwgc2VudCBzdWNjZXNzZnVsbHknLCBpZDogZGF0YT8uaWQgfSxcbiAgICAgIHsgc3RhdHVzOiAyMDAgfVxuICAgICk7XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgY29uc29sZS5lcnJvcignRXJyb3Igc2VuZGluZyBlbWFpbDonLCBlcnJvcik7XG4gICAgcmV0dXJuIE5leHRSZXNwb25zZS5qc29uKFxuICAgICAgeyBlcnJvcjogJ0ZhaWxlZCB0byBzZW5kIGVtYWlsJyB9LFxuICAgICAgeyBzdGF0dXM6IDUwMCB9XG4gICAgKTtcbiAgfVxufSAiXSwibmFtZXMiOlsiTmV4dFJlc3BvbnNlIiwiUmVzZW5kIiwiUE9TVCIsInJlcXVlc3QiLCJib2R5IiwianNvbiIsIm5hbWUiLCJlbWFpbCIsImZhY3VsdHkiLCJtZXNzYWdlIiwiZXJyb3IiLCJzdGF0dXMiLCJyZXNlbmQiLCJwcm9jZXNzIiwiZW52IiwiUkVTRU5EX0FQSV9LRVkiLCJkYXRhIiwiZW1haWxzIiwic2VuZCIsImZyb20iLCJ0byIsInN1YmplY3QiLCJyZXBseVRvIiwidGV4dCIsImh0bWwiLCJyZXBsYWNlIiwiY29uc29sZSIsImlkIl0sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./app/api/contact/route.ts\n");

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

/***/ "async_hooks":
/*!******************************!*\
  !*** external "async_hooks" ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = require("async_hooks");

/***/ }),

/***/ "crypto":
/*!*************************!*\
  !*** external "crypto" ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = require("crypto");

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

/***/ "node:stream":
/*!******************************!*\
  !*** external "node:stream" ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = require("node:stream");

/***/ }),

/***/ "prettier/plugins/html":
/*!****************************************!*\
  !*** external "prettier/plugins/html" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = import("prettier/plugins/html");;

/***/ }),

/***/ "prettier/standalone":
/*!**************************************!*\
  !*** external "prettier/standalone" ***!
  \**************************************/
/***/ ((module) => {

"use strict";
module.exports = import("prettier/standalone");;

/***/ }),

/***/ "stream":
/*!*************************!*\
  !*** external "stream" ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = require("stream");

/***/ }),

/***/ "util":
/*!***********************!*\
  !*** external "util" ***!
  \***********************/
/***/ ((module) => {

"use strict";
module.exports = require("util");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next","vendor-chunks/resend"], () => (__webpack_exec__("(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fcontact%2Froute&page=%2Fapi%2Fcontact%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fcontact%2Froute.ts&appDir=%2FUsers%2Ffuyukimatsubara%2Fdevelopment%2Farrowheads-corporate%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Ffuyukimatsubara%2Fdevelopment%2Farrowheads-corporate&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!")));
module.exports = __webpack_exports__;

})();