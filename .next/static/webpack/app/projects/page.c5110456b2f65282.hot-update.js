"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/projects/page",{

/***/ "(app-pages-browser)/./src/app/projects/page.tsx":
/*!***********************************!*\
  !*** ./src/app/projects/page.tsx ***!
  \***********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next-auth/react */ \"(app-pages-browser)/./node_modules/next-auth/react/index.js\");\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_auth_react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _lib_Constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/lib/Constants */ \"(app-pages-browser)/./src/lib/Constants.ts\");\n/* harmony import */ var _components_ProjectCard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/ProjectCard */ \"(app-pages-browser)/./src/components/ProjectCard.tsx\");\n/* harmony import */ var _components_ProjectCard2__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/ProjectCard2 */ \"(app-pages-browser)/./src/components/ProjectCard2.tsx\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/navigation */ \"(app-pages-browser)/./node_modules/next/dist/api/navigation.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\nconst Projects = ()=>{\n    _s();\n    const { data: session, status } = (0,next_auth_react__WEBPACK_IMPORTED_MODULE_2__.useSession)();\n    const [projects, setProjects] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [assignedProjects, setAssignedProjects] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);\n    const [error, setError] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const router = (0,next_navigation__WEBPACK_IMPORTED_MODULE_6__.useRouter)();\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        var _session_user, _session_backendTokens;\n        if (status === \"loading\") return;\n        if (!session) {\n            setError(\"You must be signed in to view projects.\");\n            setLoading(false);\n            return;\n        }\n        const userId = (_session_user = session.user) === null || _session_user === void 0 ? void 0 : _session_user.id;\n        const accessToken = ((_session_backendTokens = session.backendTokens) === null || _session_backendTokens === void 0 ? void 0 : _session_backendTokens.accessToken) || \"\";\n        const fetchProjects = async ()=>{\n            try {\n                const response = await fetch(\"\".concat(_lib_Constants__WEBPACK_IMPORTED_MODULE_3__.Backend_URL, \"/projects/user/\").concat(userId), {\n                    headers: {\n                        Authorization: \"Bearer \".concat(accessToken)\n                    }\n                });\n                if (!response.ok) {\n                    throw new Error(\"Failed to fetch projects\");\n                }\n                const data = await response.json();\n                setProjects(data);\n            } catch (error) {\n                setError(error.message);\n            }\n        };\n        const fetchAssignedProjects = async ()=>{\n            try {\n                const response = await fetch(\"\".concat(_lib_Constants__WEBPACK_IMPORTED_MODULE_3__.Backend_URL, \"/tasks/user/\").concat(userId), {\n                    headers: {\n                        Authorization: \"Bearer \".concat(accessToken)\n                    }\n                });\n                if (!response.ok) {\n                    throw new Error(\"Failed to fetch assigned projects\");\n                }\n                const data = await response.json();\n                setAssignedProjects(data);\n            } catch (error) {\n                setError(error.message);\n            }\n        };\n        const fetchData = async ()=>{\n            setLoading(true);\n            await Promise.all([\n                fetchProjects(),\n                fetchAssignedProjects()\n            ]);\n            setLoading(false);\n        };\n        fetchData();\n    }, [\n        session,\n        status\n    ]);\n    const filteredAssignedProjects = assignedProjects.filter((assigned)=>!projects.some((project)=>project.id === assigned.project.id));\n    const handleNewProject = ()=>{\n        router.push(\"/projects/add-new\");\n    };\n    if (loading) return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: \"Loading...\"\n    }, void 0, false, {\n        fileName: \"D:\\\\New folder (3)\\\\nest\\\\fullStak-auth-nextjs-main\\\\src\\\\app\\\\projects\\\\page.tsx\",\n        lineNumber: 80,\n        columnNumber: 23\n    }, undefined);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"p-4\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex justify-between items-center mb-4\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        className: \"text-2xl font-bold\",\n                        children: \"Projects Dashboard\"\n                    }, void 0, false, {\n                        fileName: \"D:\\\\New folder (3)\\\\nest\\\\fullStak-auth-nextjs-main\\\\src\\\\app\\\\projects\\\\page.tsx\",\n                        lineNumber: 85,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        onClick: handleNewProject,\n                        className: \"bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500\",\n                        children: \"New Project\"\n                    }, void 0, false, {\n                        fileName: \"D:\\\\New folder (3)\\\\nest\\\\fullStak-auth-nextjs-main\\\\src\\\\app\\\\projects\\\\page.tsx\",\n                        lineNumber: 86,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"D:\\\\New folder (3)\\\\nest\\\\fullStak-auth-nextjs-main\\\\src\\\\app\\\\projects\\\\page.tsx\",\n                lineNumber: 84,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                        className: \"text-xl font-semibold mb-4\",\n                        children: \"My Projects\"\n                    }, void 0, false, {\n                        fileName: \"D:\\\\New folder (3)\\\\nest\\\\fullStak-auth-nextjs-main\\\\src\\\\app\\\\projects\\\\page.tsx\",\n                        lineNumber: 95,\n                        columnNumber: 9\n                    }, undefined),\n                    projects.length === 0 ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: \"No projects available\"\n                    }, void 0, false, {\n                        fileName: \"D:\\\\New folder (3)\\\\nest\\\\fullStak-auth-nextjs-main\\\\src\\\\app\\\\projects\\\\page.tsx\",\n                        lineNumber: 97,\n                        columnNumber: 11\n                    }, undefined) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4\",\n                        children: projects.map((project)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ProjectCard__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                                id: project.id,\n                                title: project.title,\n                                description: project.description,\n                                createdAt: project.createdAt\n                            }, project.id, false, {\n                                fileName: \"D:\\\\New folder (3)\\\\nest\\\\fullStak-auth-nextjs-main\\\\src\\\\app\\\\projects\\\\page.tsx\",\n                                lineNumber: 101,\n                                columnNumber: 15\n                            }, undefined))\n                    }, void 0, false, {\n                        fileName: \"D:\\\\New folder (3)\\\\nest\\\\fullStak-auth-nextjs-main\\\\src\\\\app\\\\projects\\\\page.tsx\",\n                        lineNumber: 99,\n                        columnNumber: 11\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"D:\\\\New folder (3)\\\\nest\\\\fullStak-auth-nextjs-main\\\\src\\\\app\\\\projects\\\\page.tsx\",\n                lineNumber: 94,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"mt-10\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                        className: \"text-xl font-semibold mb-4\",\n                        children: \"Assigned Other Projects\"\n                    }, void 0, false, {\n                        fileName: \"D:\\\\New folder (3)\\\\nest\\\\fullStak-auth-nextjs-main\\\\src\\\\app\\\\projects\\\\page.tsx\",\n                        lineNumber: 114,\n                        columnNumber: 9\n                    }, undefined),\n                    filteredAssignedProjects.length === 0 ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: \"No assigned projects\"\n                    }, void 0, false, {\n                        fileName: \"D:\\\\New folder (3)\\\\nest\\\\fullStak-auth-nextjs-main\\\\src\\\\app\\\\projects\\\\page.tsx\",\n                        lineNumber: 116,\n                        columnNumber: 11\n                    }, undefined) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4\",\n                        children: filteredAssignedProjects.map((assigned)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ProjectCard2__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                                id: assigned.project.id,\n                                title: assigned.project.title,\n                                description: assigned.project.description,\n                                createdAt: assigned.project.createdAt\n                            }, assigned.project.id, false, {\n                                fileName: \"D:\\\\New folder (3)\\\\nest\\\\fullStak-auth-nextjs-main\\\\src\\\\app\\\\projects\\\\page.tsx\",\n                                lineNumber: 120,\n                                columnNumber: 15\n                            }, undefined))\n                    }, void 0, false, {\n                        fileName: \"D:\\\\New folder (3)\\\\nest\\\\fullStak-auth-nextjs-main\\\\src\\\\app\\\\projects\\\\page.tsx\",\n                        lineNumber: 118,\n                        columnNumber: 11\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"D:\\\\New folder (3)\\\\nest\\\\fullStak-auth-nextjs-main\\\\src\\\\app\\\\projects\\\\page.tsx\",\n                lineNumber: 113,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"D:\\\\New folder (3)\\\\nest\\\\fullStak-auth-nextjs-main\\\\src\\\\app\\\\projects\\\\page.tsx\",\n        lineNumber: 83,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Projects, \"hyXrjpSCpBoo4oC10dn6uHJq9I8=\", false, function() {\n    return [\n        next_auth_react__WEBPACK_IMPORTED_MODULE_2__.useSession,\n        next_navigation__WEBPACK_IMPORTED_MODULE_6__.useRouter\n    ];\n});\n_c = Projects;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Projects);\nvar _c;\n$RefreshReg$(_c, \"Projects\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvcHJvamVjdHMvcGFnZS50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQ21EO0FBQ047QUFDQztBQUNTO0FBQ0U7QUFDYjtBQUU1QyxNQUFNUSxXQUFXOztJQUNmLE1BQU0sRUFBRUMsTUFBTUMsT0FBTyxFQUFFQyxNQUFNLEVBQUUsR0FBR1IsMkRBQVVBO0lBQzVDLE1BQU0sQ0FBQ1MsVUFBVUMsWUFBWSxHQUFHWCwrQ0FBUUEsQ0FBUSxFQUFFO0lBQ2xELE1BQU0sQ0FBQ1ksa0JBQWtCQyxvQkFBb0IsR0FBR2IsK0NBQVFBLENBQVEsRUFBRTtJQUNsRSxNQUFNLENBQUNjLFNBQVNDLFdBQVcsR0FBR2YsK0NBQVFBLENBQVU7SUFDaEQsTUFBTSxDQUFDZ0IsT0FBT0MsU0FBUyxHQUFHakIsK0NBQVFBLENBQWdCO0lBQ2xELE1BQU1rQixTQUFTYiwwREFBU0E7SUFFeEJOLGdEQUFTQSxDQUFDO1lBU09TLGVBQ0tBO1FBVHBCLElBQUlDLFdBQVcsV0FBVztRQUUxQixJQUFJLENBQUNELFNBQVM7WUFDWlMsU0FBUztZQUNURixXQUFXO1lBQ1g7UUFDRjtRQUVBLE1BQU1JLFVBQVNYLGdCQUFBQSxRQUFRWSxJQUFJLGNBQVpaLG9DQUFBQSxjQUFjYSxFQUFFO1FBQy9CLE1BQU1DLGNBQWNkLEVBQUFBLHlCQUFBQSxRQUFRZSxhQUFhLGNBQXJCZiw2Q0FBQUEsdUJBQXVCYyxXQUFXLEtBQUk7UUFFMUQsTUFBTUUsZ0JBQWdCO1lBQ3BCLElBQUk7Z0JBQ0YsTUFBTUMsV0FBVyxNQUFNQyxNQUFNLEdBQWdDUCxPQUE3QmpCLHVEQUFXQSxFQUFDLG1CQUF3QixPQUFQaUIsU0FBVTtvQkFDckVRLFNBQVM7d0JBQ1BDLGVBQWUsVUFBc0IsT0FBWk47b0JBQzNCO2dCQUNGO2dCQUNBLElBQUksQ0FBQ0csU0FBU0ksRUFBRSxFQUFFO29CQUNoQixNQUFNLElBQUlDLE1BQU07Z0JBQ2xCO2dCQUNBLE1BQU12QixPQUFPLE1BQU1rQixTQUFTTSxJQUFJO2dCQUNoQ3BCLFlBQVlKO1lBQ2QsRUFBRSxPQUFPUyxPQUFPO2dCQUNkQyxTQUFTRCxNQUFNZ0IsT0FBTztZQUN4QjtRQUNGO1FBRUEsTUFBTUMsd0JBQXdCO1lBQzVCLElBQUk7Z0JBQ0YsTUFBTVIsV0FBVyxNQUFNQyxNQUFNLEdBQTZCUCxPQUExQmpCLHVEQUFXQSxFQUFDLGdCQUFxQixPQUFQaUIsU0FBVTtvQkFDbEVRLFNBQVM7d0JBQ1BDLGVBQWUsVUFBc0IsT0FBWk47b0JBQzNCO2dCQUNGO2dCQUNBLElBQUksQ0FBQ0csU0FBU0ksRUFBRSxFQUFFO29CQUNoQixNQUFNLElBQUlDLE1BQU07Z0JBQ2xCO2dCQUNBLE1BQU12QixPQUFPLE1BQU1rQixTQUFTTSxJQUFJO2dCQUNoQ2xCLG9CQUFvQk47WUFDdEIsRUFBRSxPQUFPUyxPQUFPO2dCQUNkQyxTQUFTRCxNQUFNZ0IsT0FBTztZQUN4QjtRQUNGO1FBRUEsTUFBTUUsWUFBWTtZQUNoQm5CLFdBQVc7WUFDWCxNQUFNb0IsUUFBUUMsR0FBRyxDQUFDO2dCQUFDWjtnQkFBaUJTO2FBQXdCO1lBQzVEbEIsV0FBVztRQUNiO1FBRUFtQjtJQUNGLEdBQUc7UUFBQzFCO1FBQVNDO0tBQU87SUFFcEIsTUFBTTRCLDJCQUEyQnpCLGlCQUFpQjBCLE1BQU0sQ0FDdEQsQ0FBQ0MsV0FBYSxDQUFDN0IsU0FBUzhCLElBQUksQ0FBQyxDQUFDQyxVQUFZQSxRQUFRcEIsRUFBRSxLQUFLa0IsU0FBU0UsT0FBTyxDQUFDcEIsRUFBRTtJQUc5RSxNQUFNcUIsbUJBQW1CO1FBQ3ZCeEIsT0FBT3lCLElBQUksQ0FBQztJQUNkO0lBRUEsSUFBSTdCLFNBQVMscUJBQU8sOERBQUM4QjtrQkFBSTs7Ozs7O0lBRXpCLHFCQUNFLDhEQUFDQTtRQUFJQyxXQUFVOzswQkFDYiw4REFBQ0Q7Z0JBQUlDLFdBQVU7O2tDQUNiLDhEQUFDQzt3QkFBR0QsV0FBVTtrQ0FBcUI7Ozs7OztrQ0FDbkMsOERBQUNFO3dCQUNDQyxTQUFTTjt3QkFDVEcsV0FBVTtrQ0FDWDs7Ozs7Ozs7Ozs7OzBCQUtILDhEQUFDRDs7a0NBQ0MsOERBQUNLO3dCQUFHSixXQUFVO2tDQUE2Qjs7Ozs7O29CQUMxQ25DLFNBQVN3QyxNQUFNLEtBQUssa0JBQ25CLDhEQUFDQztrQ0FBRTs7Ozs7a0RBRUgsOERBQUNQO3dCQUFJQyxXQUFVO2tDQUNabkMsU0FBUzBDLEdBQUcsQ0FBQyxDQUFDWCx3QkFDYiw4REFBQ3RDLCtEQUFXQTtnQ0FFVmtCLElBQUlvQixRQUFRcEIsRUFBRTtnQ0FDZGdDLE9BQU9aLFFBQVFZLEtBQUs7Z0NBQ3BCQyxhQUFhYixRQUFRYSxXQUFXO2dDQUNoQ0MsV0FBV2QsUUFBUWMsU0FBUzsrQkFKdkJkLFFBQVFwQixFQUFFOzs7Ozs7Ozs7Ozs7Ozs7OzBCQVd6Qiw4REFBQ3VCO2dCQUFJQyxXQUFVOztrQ0FDYiw4REFBQ0k7d0JBQUdKLFdBQVU7a0NBQTZCOzs7Ozs7b0JBQzFDUix5QkFBeUJhLE1BQU0sS0FBSyxrQkFDbkMsOERBQUNDO2tDQUFFOzs7OztrREFFSCw4REFBQ1A7d0JBQUlDLFdBQVU7a0NBQ1pSLHlCQUF5QmUsR0FBRyxDQUFDLENBQUNiLHlCQUM3Qiw4REFBQ25DLGdFQUFZQTtnQ0FFWGlCLElBQUlrQixTQUFTRSxPQUFPLENBQUNwQixFQUFFO2dDQUN2QmdDLE9BQU9kLFNBQVNFLE9BQU8sQ0FBQ1ksS0FBSztnQ0FDN0JDLGFBQWFmLFNBQVNFLE9BQU8sQ0FBQ2EsV0FBVztnQ0FDekNDLFdBQVdoQixTQUFTRSxPQUFPLENBQUNjLFNBQVM7K0JBSmhDaEIsU0FBU0UsT0FBTyxDQUFDcEIsRUFBRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQVl4QztHQTVITWY7O1FBQzhCTCx1REFBVUE7UUFLN0JJLHNEQUFTQTs7O0tBTnBCQztBQThITiwrREFBZUEsUUFBUUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvYXBwL3Byb2plY3RzL3BhZ2UudHN4PzVjNzAiXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBjbGllbnQnO1xuaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyB1c2VTZXNzaW9uIH0gZnJvbSAnbmV4dC1hdXRoL3JlYWN0JztcbmltcG9ydCB7IEJhY2tlbmRfVVJMIH0gZnJvbSAnQC9saWIvQ29uc3RhbnRzJzsgXG5pbXBvcnQgUHJvamVjdENhcmQgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9Qcm9qZWN0Q2FyZCc7IFxuaW1wb3J0IFByb2plY3RDYXJkMiBmcm9tICcuLi8uLi9jb21wb25lbnRzL1Byb2plY3RDYXJkMic7IFxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9uYXZpZ2F0aW9uJztcblxuY29uc3QgUHJvamVjdHMgPSAoKSA9PiB7XG4gIGNvbnN0IHsgZGF0YTogc2Vzc2lvbiwgc3RhdHVzIH0gPSB1c2VTZXNzaW9uKCk7XG4gIGNvbnN0IFtwcm9qZWN0cywgc2V0UHJvamVjdHNdID0gdXNlU3RhdGU8YW55W10+KFtdKTtcbiAgY29uc3QgW2Fzc2lnbmVkUHJvamVjdHMsIHNldEFzc2lnbmVkUHJvamVjdHNdID0gdXNlU3RhdGU8YW55W10+KFtdKTtcbiAgY29uc3QgW2xvYWRpbmcsIHNldExvYWRpbmddID0gdXNlU3RhdGU8Ym9vbGVhbj4odHJ1ZSk7XG4gIGNvbnN0IFtlcnJvciwgc2V0RXJyb3JdID0gdXNlU3RhdGU8c3RyaW5nIHwgbnVsbD4obnVsbCk7XG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKHN0YXR1cyA9PT0gJ2xvYWRpbmcnKSByZXR1cm47XG5cbiAgICBpZiAoIXNlc3Npb24pIHtcbiAgICAgIHNldEVycm9yKCdZb3UgbXVzdCBiZSBzaWduZWQgaW4gdG8gdmlldyBwcm9qZWN0cy4nKTtcbiAgICAgIHNldExvYWRpbmcoZmFsc2UpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IHVzZXJJZCA9IHNlc3Npb24udXNlcj8uaWQ7XG4gICAgY29uc3QgYWNjZXNzVG9rZW4gPSBzZXNzaW9uLmJhY2tlbmRUb2tlbnM/LmFjY2Vzc1Rva2VuIHx8ICcnO1xuXG4gICAgY29uc3QgZmV0Y2hQcm9qZWN0cyA9IGFzeW5jICgpID0+IHtcbiAgICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goYCR7QmFja2VuZF9VUkx9L3Byb2plY3RzL3VzZXIvJHt1c2VySWR9YCwge1xuICAgICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgIEF1dGhvcml6YXRpb246IGBCZWFyZXIgJHthY2Nlc3NUb2tlbn1gLFxuICAgICAgICAgIH0sXG4gICAgICAgIH0pO1xuICAgICAgICBpZiAoIXJlc3BvbnNlLm9rKSB7XG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdGYWlsZWQgdG8gZmV0Y2ggcHJvamVjdHMnKTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICAgICAgICBzZXRQcm9qZWN0cyhkYXRhKTtcbiAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgIHNldEVycm9yKGVycm9yLm1lc3NhZ2UpO1xuICAgICAgfVxuICAgIH07XG5cbiAgICBjb25zdCBmZXRjaEFzc2lnbmVkUHJvamVjdHMgPSBhc3luYyAoKSA9PiB7XG4gICAgICB0cnkge1xuICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGAke0JhY2tlbmRfVVJMfS90YXNrcy91c2VyLyR7dXNlcklkfWAsIHtcbiAgICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICBBdXRob3JpemF0aW9uOiBgQmVhcmVyICR7YWNjZXNzVG9rZW59YCxcbiAgICAgICAgICB9LFxuICAgICAgICB9KTtcbiAgICAgICAgaWYgKCFyZXNwb25zZS5vaykge1xuICAgICAgICAgIHRocm93IG5ldyBFcnJvcignRmFpbGVkIHRvIGZldGNoIGFzc2lnbmVkIHByb2plY3RzJyk7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbiAgICAgICAgc2V0QXNzaWduZWRQcm9qZWN0cyhkYXRhKTtcbiAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgIHNldEVycm9yKGVycm9yLm1lc3NhZ2UpO1xuICAgICAgfVxuICAgIH07XG5cbiAgICBjb25zdCBmZXRjaERhdGEgPSBhc3luYyAoKSA9PiB7XG4gICAgICBzZXRMb2FkaW5nKHRydWUpO1xuICAgICAgYXdhaXQgUHJvbWlzZS5hbGwoW2ZldGNoUHJvamVjdHMoKSwgZmV0Y2hBc3NpZ25lZFByb2plY3RzKCldKTtcbiAgICAgIHNldExvYWRpbmcoZmFsc2UpO1xuICAgIH07XG5cbiAgICBmZXRjaERhdGEoKTtcbiAgfSwgW3Nlc3Npb24sIHN0YXR1c10pO1xuXG4gIGNvbnN0IGZpbHRlcmVkQXNzaWduZWRQcm9qZWN0cyA9IGFzc2lnbmVkUHJvamVjdHMuZmlsdGVyKFxuICAgIChhc3NpZ25lZCkgPT4gIXByb2plY3RzLnNvbWUoKHByb2plY3QpID0+IHByb2plY3QuaWQgPT09IGFzc2lnbmVkLnByb2plY3QuaWQpXG4gICk7XG5cbiAgY29uc3QgaGFuZGxlTmV3UHJvamVjdCA9ICgpID0+IHtcbiAgICByb3V0ZXIucHVzaCgnL3Byb2plY3RzL2FkZC1uZXcnKTsgXG4gIH07XG5cbiAgaWYgKGxvYWRpbmcpIHJldHVybiA8ZGl2PkxvYWRpbmcuLi48L2Rpdj47XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInAtNFwiPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGp1c3RpZnktYmV0d2VlbiBpdGVtcy1jZW50ZXIgbWItNFwiPlxuICAgICAgICA8aDEgY2xhc3NOYW1lPVwidGV4dC0yeGwgZm9udC1ib2xkXCI+UHJvamVjdHMgRGFzaGJvYXJkPC9oMT5cbiAgICAgICAgPGJ1dHRvblxuICAgICAgICAgIG9uQ2xpY2s9e2hhbmRsZU5ld1Byb2plY3R9XG4gICAgICAgICAgY2xhc3NOYW1lPVwiYmctYmx1ZS01MDAgdGV4dC13aGl0ZSBweS0yIHB4LTQgcm91bmRlZCBob3ZlcjpiZy1ibHVlLTYwMCBmb2N1czpvdXRsaW5lLW5vbmUgZm9jdXM6cmluZy0yIGZvY3VzOnJpbmctYmx1ZS01MDBcIlxuICAgICAgICA+XG4gICAgICAgICAgTmV3IFByb2plY3RcbiAgICAgICAgPC9idXR0b24+XG4gICAgICA8L2Rpdj5cblxuICAgICAgPGRpdj5cbiAgICAgICAgPGgyIGNsYXNzTmFtZT1cInRleHQteGwgZm9udC1zZW1pYm9sZCBtYi00XCI+TXkgUHJvamVjdHM8L2gyPlxuICAgICAgICB7cHJvamVjdHMubGVuZ3RoID09PSAwID8gKFxuICAgICAgICAgIDxwPk5vIHByb2plY3RzIGF2YWlsYWJsZTwvcD5cbiAgICAgICAgKSA6IChcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQgZ3JpZC1jb2xzLTEgc206Z3JpZC1jb2xzLTIgbWQ6Z3JpZC1jb2xzLTMgZ2FwLTRcIj5cbiAgICAgICAgICAgIHtwcm9qZWN0cy5tYXAoKHByb2plY3QpID0+IChcbiAgICAgICAgICAgICAgPFByb2plY3RDYXJkXG4gICAgICAgICAgICAgICAga2V5PXtwcm9qZWN0LmlkfVxuICAgICAgICAgICAgICAgIGlkPXtwcm9qZWN0LmlkfVxuICAgICAgICAgICAgICAgIHRpdGxlPXtwcm9qZWN0LnRpdGxlfVxuICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uPXtwcm9qZWN0LmRlc2NyaXB0aW9ufVxuICAgICAgICAgICAgICAgIGNyZWF0ZWRBdD17cHJvamVjdC5jcmVhdGVkQXR9XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICApKX1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKX1cbiAgICAgIDwvZGl2PlxuXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIm10LTEwXCI+XG4gICAgICAgIDxoMiBjbGFzc05hbWU9XCJ0ZXh0LXhsIGZvbnQtc2VtaWJvbGQgbWItNFwiPkFzc2lnbmVkIE90aGVyIFByb2plY3RzPC9oMj5cbiAgICAgICAge2ZpbHRlcmVkQXNzaWduZWRQcm9qZWN0cy5sZW5ndGggPT09IDAgPyAoXG4gICAgICAgICAgPHA+Tm8gYXNzaWduZWQgcHJvamVjdHM8L3A+XG4gICAgICAgICkgOiAoXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkIGdyaWQtY29scy0xIHNtOmdyaWQtY29scy0yIG1kOmdyaWQtY29scy0zIGdhcC00XCI+XG4gICAgICAgICAgICB7ZmlsdGVyZWRBc3NpZ25lZFByb2plY3RzLm1hcCgoYXNzaWduZWQpID0+IChcbiAgICAgICAgICAgICAgPFByb2plY3RDYXJkMlxuICAgICAgICAgICAgICAgIGtleT17YXNzaWduZWQucHJvamVjdC5pZH1cbiAgICAgICAgICAgICAgICBpZD17YXNzaWduZWQucHJvamVjdC5pZH1cbiAgICAgICAgICAgICAgICB0aXRsZT17YXNzaWduZWQucHJvamVjdC50aXRsZX1cbiAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbj17YXNzaWduZWQucHJvamVjdC5kZXNjcmlwdGlvbn1cbiAgICAgICAgICAgICAgICBjcmVhdGVkQXQ9e2Fzc2lnbmVkLnByb2plY3QuY3JlYXRlZEF0fVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgKSl9XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICl9XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFByb2plY3RzO1xuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJ1c2VTZXNzaW9uIiwiQmFja2VuZF9VUkwiLCJQcm9qZWN0Q2FyZCIsIlByb2plY3RDYXJkMiIsInVzZVJvdXRlciIsIlByb2plY3RzIiwiZGF0YSIsInNlc3Npb24iLCJzdGF0dXMiLCJwcm9qZWN0cyIsInNldFByb2plY3RzIiwiYXNzaWduZWRQcm9qZWN0cyIsInNldEFzc2lnbmVkUHJvamVjdHMiLCJsb2FkaW5nIiwic2V0TG9hZGluZyIsImVycm9yIiwic2V0RXJyb3IiLCJyb3V0ZXIiLCJ1c2VySWQiLCJ1c2VyIiwiaWQiLCJhY2Nlc3NUb2tlbiIsImJhY2tlbmRUb2tlbnMiLCJmZXRjaFByb2plY3RzIiwicmVzcG9uc2UiLCJmZXRjaCIsImhlYWRlcnMiLCJBdXRob3JpemF0aW9uIiwib2siLCJFcnJvciIsImpzb24iLCJtZXNzYWdlIiwiZmV0Y2hBc3NpZ25lZFByb2plY3RzIiwiZmV0Y2hEYXRhIiwiUHJvbWlzZSIsImFsbCIsImZpbHRlcmVkQXNzaWduZWRQcm9qZWN0cyIsImZpbHRlciIsImFzc2lnbmVkIiwic29tZSIsInByb2plY3QiLCJoYW5kbGVOZXdQcm9qZWN0IiwicHVzaCIsImRpdiIsImNsYXNzTmFtZSIsImgxIiwiYnV0dG9uIiwib25DbGljayIsImgyIiwibGVuZ3RoIiwicCIsIm1hcCIsInRpdGxlIiwiZGVzY3JpcHRpb24iLCJjcmVhdGVkQXQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/projects/page.tsx\n"));

/***/ })

});