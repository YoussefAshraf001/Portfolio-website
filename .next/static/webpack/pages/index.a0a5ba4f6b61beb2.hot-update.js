"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/ProjectImage.js":
/*!************************************!*\
  !*** ./components/ProjectImage.js ***!
  \************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\nvar _s = $RefreshSig$();\n\nconst ProjectCard = (param)=>{\n    let { project } = param;\n    _s();\n    const [progress, setProgress] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    const [isInView, setIsInView] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [isCompleted, setIsCompleted] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const progressRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    // Intersection Observer to trigger animation when in view\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const observer = new IntersectionObserver((param)=>{\n            let [entry] = param;\n            if (entry.isIntersecting) {\n                setIsInView(true);\n            }\n        }, {\n            threshold: 0.5\n        });\n        if (progressRef.current) {\n            observer.observe(progressRef.current);\n        }\n        // Cleanup on unmount\n        return ()=>{\n            if (progressRef.current) {\n                observer.unobserve(progressRef.current);\n            }\n        };\n    }, []);\n    // Animate progress bar once it's in view\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        if (isInView && !project.imageUrl) {\n            let currentProgress = 0;\n            const duration = 2000; // Total duration for animation in ms\n            const startTime = Date.now(); // Time when the animation starts\n            const animateProgress = ()=>{\n                const elapsedTime = Date.now() - startTime;\n                const progressPercent = Math.min(elapsedTime / duration * 100, 100);\n                setProgress(progressPercent);\n                if (progressPercent < 100) {\n                    requestAnimationFrame(animateProgress); // Continue the animation\n                } else {\n                    setIsCompleted(true); // Animation completed\n                }\n            };\n            requestAnimationFrame(animateProgress); // Start the animation\n            // Cleanup on unmount\n            return ()=>{\n                setIsCompleted(false);\n            };\n        }\n    }, [\n        isInView,\n        project.imageUrl\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"project-card \".concat(!project.imageUrl ? \"bg-black rounded-t-lg\" : \"rounded-lg\"),\n        children: project.imageUrl ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n            src: project.imageUrl,\n            className: \"object-cover h-[280px] w-full rounded-t-lg\",\n            alt: project.title\n        }, void 0, false, {\n            fileName: \"C:\\\\Coding\\\\portfolio-website\\\\components\\\\ProjectImage.js\",\n            lineNumber: 69,\n            columnNumber: 9\n        }, undefined) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            ref: progressRef,\n            className: \"relative h-[280px] w-full bg-black rounded-t-lg overflow-hidden\",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"absolute flex items-center justify-center top-1/2 left-4 transform -translate-y-1/2 h-[15px] bg-blue-500 rounded-full text-center text-white font-bold transition-all duration-500\",\n                style: {\n                    width: \"\".concat(isInView ? progress : 0, \"%\")\n                },\n                children: [\n                    isCompleted && \"\".concat(Math.round(progress), \"% Done\"),\n                    \" \"\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Coding\\\\portfolio-website\\\\components\\\\ProjectImage.js\",\n                lineNumber: 79,\n                columnNumber: 11\n            }, undefined)\n        }, void 0, false, {\n            fileName: \"C:\\\\Coding\\\\portfolio-website\\\\components\\\\ProjectImage.js\",\n            lineNumber: 75,\n            columnNumber: 9\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"C:\\\\Coding\\\\portfolio-website\\\\components\\\\ProjectImage.js\",\n        lineNumber: 63,\n        columnNumber: 5\n    }, undefined);\n};\n_s(ProjectCard, \"DisrYpYTEZclu9MQUrbqcveUhkA=\");\n_c = ProjectCard;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ProjectCard);\nvar _c;\n$RefreshReg$(_c, \"ProjectCard\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL1Byb2plY3RJbWFnZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQTJEO0FBRTNELE1BQU1JLGNBQWM7UUFBQyxFQUFFQyxPQUFPLEVBQUU7O0lBQzlCLE1BQU0sQ0FBQ0MsVUFBVUMsWUFBWSxHQUFHTiwrQ0FBUUEsQ0FBQztJQUN6QyxNQUFNLENBQUNPLFVBQVVDLFlBQVksR0FBR1IsK0NBQVFBLENBQUM7SUFDekMsTUFBTSxDQUFDUyxhQUFhQyxlQUFlLEdBQUdWLCtDQUFRQSxDQUFDO0lBQy9DLE1BQU1XLGNBQWNULDZDQUFNQSxDQUFDO0lBRTNCLDBEQUEwRDtJQUMxREQsZ0RBQVNBLENBQUM7UUFDUixNQUFNVyxXQUFXLElBQUlDLHFCQUNuQjtnQkFBQyxDQUFDQyxNQUFNO1lBQ04sSUFBSUEsTUFBTUMsY0FBYyxFQUFFO2dCQUN4QlAsWUFBWTtZQUNkO1FBQ0YsR0FDQTtZQUNFUSxXQUFXO1FBQ2I7UUFHRixJQUFJTCxZQUFZTSxPQUFPLEVBQUU7WUFDdkJMLFNBQVNNLE9BQU8sQ0FBQ1AsWUFBWU0sT0FBTztRQUN0QztRQUVBLHFCQUFxQjtRQUNyQixPQUFPO1lBQ0wsSUFBSU4sWUFBWU0sT0FBTyxFQUFFO2dCQUN2QkwsU0FBU08sU0FBUyxDQUFDUixZQUFZTSxPQUFPO1lBQ3hDO1FBQ0Y7SUFDRixHQUFHLEVBQUU7SUFFTCx5Q0FBeUM7SUFDekNoQixnREFBU0EsQ0FBQztRQUNSLElBQUlNLFlBQVksQ0FBQ0gsUUFBUWdCLFFBQVEsRUFBRTtZQUNqQyxJQUFJQyxrQkFBa0I7WUFDdEIsTUFBTUMsV0FBVyxNQUFNLHFDQUFxQztZQUM1RCxNQUFNQyxZQUFZQyxLQUFLQyxHQUFHLElBQUksaUNBQWlDO1lBRS9ELE1BQU1DLGtCQUFrQjtnQkFDdEIsTUFBTUMsY0FBY0gsS0FBS0MsR0FBRyxLQUFLRjtnQkFDakMsTUFBTUssa0JBQWtCQyxLQUFLQyxHQUFHLENBQUMsY0FBZVIsV0FBWSxLQUFLO2dCQUNqRWhCLFlBQVlzQjtnQkFFWixJQUFJQSxrQkFBa0IsS0FBSztvQkFDekJHLHNCQUFzQkwsa0JBQWtCLHlCQUF5QjtnQkFDbkUsT0FBTztvQkFDTGhCLGVBQWUsT0FBTyxzQkFBc0I7Z0JBQzlDO1lBQ0Y7WUFFQXFCLHNCQUFzQkwsa0JBQWtCLHNCQUFzQjtZQUU5RCxxQkFBcUI7WUFDckIsT0FBTztnQkFDTGhCLGVBQWU7WUFDakI7UUFDRjtJQUNGLEdBQUc7UUFBQ0g7UUFBVUgsUUFBUWdCLFFBQVE7S0FBQztJQUUvQixxQkFDRSw4REFBQ1k7UUFDQ0MsV0FBVyxnQkFFVixPQURDLENBQUM3QixRQUFRZ0IsUUFBUSxHQUFHLDBCQUEwQjtrQkFHL0NoQixRQUFRZ0IsUUFBUSxpQkFDZiw4REFBQ2M7WUFDQ0MsS0FBSy9CLFFBQVFnQixRQUFRO1lBQ3JCYSxXQUFVO1lBQ1ZHLEtBQUtoQyxRQUFRaUMsS0FBSzs7Ozs7c0NBR3BCLDhEQUFDTDtZQUNDTSxLQUFLM0I7WUFDTHNCLFdBQVU7c0JBRVYsNEVBQUNEO2dCQUNDQyxXQUFVO2dCQUNWTSxPQUFPO29CQUNMQyxPQUFPLEdBQTJCLE9BQXhCakMsV0FBV0YsV0FBVyxHQUFFO2dCQUNwQzs7b0JBRUNJLGVBQWUsR0FBd0IsT0FBckJvQixLQUFLWSxLQUFLLENBQUNwQyxXQUFVO29CQUFTOzs7Ozs7Ozs7Ozs7Ozs7OztBQU83RDtHQXpGTUY7S0FBQUE7QUEyRk4sK0RBQWVBLFdBQVdBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Qcm9qZWN0SW1hZ2UuanM/OTU1MSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCwgdXNlUmVmIH0gZnJvbSBcInJlYWN0XCI7XHJcblxyXG5jb25zdCBQcm9qZWN0Q2FyZCA9ICh7IHByb2plY3QgfSkgPT4ge1xyXG4gIGNvbnN0IFtwcm9ncmVzcywgc2V0UHJvZ3Jlc3NdID0gdXNlU3RhdGUoMCk7XHJcbiAgY29uc3QgW2lzSW5WaWV3LCBzZXRJc0luVmlld10gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgW2lzQ29tcGxldGVkLCBzZXRJc0NvbXBsZXRlZF0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgcHJvZ3Jlc3NSZWYgPSB1c2VSZWYobnVsbCk7XHJcblxyXG4gIC8vIEludGVyc2VjdGlvbiBPYnNlcnZlciB0byB0cmlnZ2VyIGFuaW1hdGlvbiB3aGVuIGluIHZpZXdcclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgY29uc3Qgb2JzZXJ2ZXIgPSBuZXcgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIoXHJcbiAgICAgIChbZW50cnldKSA9PiB7XHJcbiAgICAgICAgaWYgKGVudHJ5LmlzSW50ZXJzZWN0aW5nKSB7XHJcbiAgICAgICAgICBzZXRJc0luVmlldyh0cnVlKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICB0aHJlc2hvbGQ6IDAuNSwgLy8gVHJpZ2dlciB3aGVuIDUwJSBvZiB0aGUgZWxlbWVudCBpcyBpbiB2aWV3XHJcbiAgICAgIH1cclxuICAgICk7XHJcblxyXG4gICAgaWYgKHByb2dyZXNzUmVmLmN1cnJlbnQpIHtcclxuICAgICAgb2JzZXJ2ZXIub2JzZXJ2ZShwcm9ncmVzc1JlZi5jdXJyZW50KTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBDbGVhbnVwIG9uIHVubW91bnRcclxuICAgIHJldHVybiAoKSA9PiB7XHJcbiAgICAgIGlmIChwcm9ncmVzc1JlZi5jdXJyZW50KSB7XHJcbiAgICAgICAgb2JzZXJ2ZXIudW5vYnNlcnZlKHByb2dyZXNzUmVmLmN1cnJlbnQpO1xyXG4gICAgICB9XHJcbiAgICB9O1xyXG4gIH0sIFtdKTtcclxuXHJcbiAgLy8gQW5pbWF0ZSBwcm9ncmVzcyBiYXIgb25jZSBpdCdzIGluIHZpZXdcclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgaWYgKGlzSW5WaWV3ICYmICFwcm9qZWN0LmltYWdlVXJsKSB7XHJcbiAgICAgIGxldCBjdXJyZW50UHJvZ3Jlc3MgPSAwO1xyXG4gICAgICBjb25zdCBkdXJhdGlvbiA9IDIwMDA7IC8vIFRvdGFsIGR1cmF0aW9uIGZvciBhbmltYXRpb24gaW4gbXNcclxuICAgICAgY29uc3Qgc3RhcnRUaW1lID0gRGF0ZS5ub3coKTsgLy8gVGltZSB3aGVuIHRoZSBhbmltYXRpb24gc3RhcnRzXHJcblxyXG4gICAgICBjb25zdCBhbmltYXRlUHJvZ3Jlc3MgPSAoKSA9PiB7XHJcbiAgICAgICAgY29uc3QgZWxhcHNlZFRpbWUgPSBEYXRlLm5vdygpIC0gc3RhcnRUaW1lO1xyXG4gICAgICAgIGNvbnN0IHByb2dyZXNzUGVyY2VudCA9IE1hdGgubWluKChlbGFwc2VkVGltZSAvIGR1cmF0aW9uKSAqIDEwMCwgMTAwKTtcclxuICAgICAgICBzZXRQcm9ncmVzcyhwcm9ncmVzc1BlcmNlbnQpO1xyXG5cclxuICAgICAgICBpZiAocHJvZ3Jlc3NQZXJjZW50IDwgMTAwKSB7XHJcbiAgICAgICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoYW5pbWF0ZVByb2dyZXNzKTsgLy8gQ29udGludWUgdGhlIGFuaW1hdGlvblxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICBzZXRJc0NvbXBsZXRlZCh0cnVlKTsgLy8gQW5pbWF0aW9uIGNvbXBsZXRlZFxyXG4gICAgICAgIH1cclxuICAgICAgfTtcclxuXHJcbiAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZShhbmltYXRlUHJvZ3Jlc3MpOyAvLyBTdGFydCB0aGUgYW5pbWF0aW9uXHJcblxyXG4gICAgICAvLyBDbGVhbnVwIG9uIHVubW91bnRcclxuICAgICAgcmV0dXJuICgpID0+IHtcclxuICAgICAgICBzZXRJc0NvbXBsZXRlZChmYWxzZSk7XHJcbiAgICAgIH07XHJcbiAgICB9XHJcbiAgfSwgW2lzSW5WaWV3LCBwcm9qZWN0LmltYWdlVXJsXSk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2XHJcbiAgICAgIGNsYXNzTmFtZT17YHByb2plY3QtY2FyZCAke1xyXG4gICAgICAgICFwcm9qZWN0LmltYWdlVXJsID8gXCJiZy1ibGFjayByb3VuZGVkLXQtbGdcIiA6IFwicm91bmRlZC1sZ1wiXHJcbiAgICAgIH1gfVxyXG4gICAgPlxyXG4gICAgICB7cHJvamVjdC5pbWFnZVVybCA/IChcclxuICAgICAgICA8aW1nXHJcbiAgICAgICAgICBzcmM9e3Byb2plY3QuaW1hZ2VVcmx9XHJcbiAgICAgICAgICBjbGFzc05hbWU9XCJvYmplY3QtY292ZXIgaC1bMjgwcHhdIHctZnVsbCByb3VuZGVkLXQtbGdcIlxyXG4gICAgICAgICAgYWx0PXtwcm9qZWN0LnRpdGxlfVxyXG4gICAgICAgIC8+XHJcbiAgICAgICkgOiAoXHJcbiAgICAgICAgPGRpdlxyXG4gICAgICAgICAgcmVmPXtwcm9ncmVzc1JlZn1cclxuICAgICAgICAgIGNsYXNzTmFtZT1cInJlbGF0aXZlIGgtWzI4MHB4XSB3LWZ1bGwgYmctYmxhY2sgcm91bmRlZC10LWxnIG92ZXJmbG93LWhpZGRlblwiXHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJhYnNvbHV0ZSBmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciB0b3AtMS8yIGxlZnQtNCB0cmFuc2Zvcm0gLXRyYW5zbGF0ZS15LTEvMiBoLVsxNXB4XSBiZy1ibHVlLTUwMCByb3VuZGVkLWZ1bGwgdGV4dC1jZW50ZXIgdGV4dC13aGl0ZSBmb250LWJvbGQgdHJhbnNpdGlvbi1hbGwgZHVyYXRpb24tNTAwXCJcclxuICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICB3aWR0aDogYCR7aXNJblZpZXcgPyBwcm9ncmVzcyA6IDB9JWAsXHJcbiAgICAgICAgICAgIH19XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIHtpc0NvbXBsZXRlZCAmJiBgJHtNYXRoLnJvdW5kKHByb2dyZXNzKX0lIERvbmVgfXtcIiBcIn1cclxuICAgICAgICAgICAgey8qIE9ubHkgc2hvdyB3aGVuIGNvbXBsZXRlZCAqL31cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICApfVxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFByb2plY3RDYXJkO1xyXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsInVzZVJlZiIsIlByb2plY3RDYXJkIiwicHJvamVjdCIsInByb2dyZXNzIiwic2V0UHJvZ3Jlc3MiLCJpc0luVmlldyIsInNldElzSW5WaWV3IiwiaXNDb21wbGV0ZWQiLCJzZXRJc0NvbXBsZXRlZCIsInByb2dyZXNzUmVmIiwib2JzZXJ2ZXIiLCJJbnRlcnNlY3Rpb25PYnNlcnZlciIsImVudHJ5IiwiaXNJbnRlcnNlY3RpbmciLCJ0aHJlc2hvbGQiLCJjdXJyZW50Iiwib2JzZXJ2ZSIsInVub2JzZXJ2ZSIsImltYWdlVXJsIiwiY3VycmVudFByb2dyZXNzIiwiZHVyYXRpb24iLCJzdGFydFRpbWUiLCJEYXRlIiwibm93IiwiYW5pbWF0ZVByb2dyZXNzIiwiZWxhcHNlZFRpbWUiLCJwcm9ncmVzc1BlcmNlbnQiLCJNYXRoIiwibWluIiwicmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwiZGl2IiwiY2xhc3NOYW1lIiwiaW1nIiwic3JjIiwiYWx0IiwidGl0bGUiLCJyZWYiLCJzdHlsZSIsIndpZHRoIiwicm91bmQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/ProjectImage.js\n"));

/***/ })

});