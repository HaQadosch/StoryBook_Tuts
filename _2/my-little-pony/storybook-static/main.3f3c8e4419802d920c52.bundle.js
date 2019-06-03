(window.webpackJsonp = window.webpackJsonp || []).push([
  [0],
  {
    128: function(module, __webpack_exports__, __webpack_require__) {
      'use strict';
      var react = __webpack_require__(0),
        react_default = __webpack_require__.n(react),
        TaskList = __webpack_require__(43),
        toConsumableArray = (__webpack_require__(368), __webpack_require__(91)),
        objectSpread = __webpack_require__(9),
        Task = __webpack_require__(5),
        defaultTask = { id: '1', title: 'Test', updatedAt: new Date(2019, 5, 27), state: Task.b.INBOX },
        defaultTasks = [
          Object(objectSpread.a)({}, defaultTask, { id: '1', title: 'Todo 1' }),
          Object(objectSpread.a)({}, defaultTask, { id: '2', title: 'Todo 2' }),
          Object(objectSpread.a)({}, defaultTask, { id: '3', title: 'Todo 3' }),
          Object(objectSpread.a)({}, defaultTask, { id: '4', title: 'Todo 4' }),
          Object(objectSpread.a)({}, defaultTask, { id: '5', title: 'Todo 5' }),
          Object(objectSpread.a)({}, defaultTask, { id: '6', title: 'Todo 6' }),
        ];
      [].concat(Object(toConsumableArray.a)(defaultTasks.slice(0, 5)), [
        Object(objectSpread.a)({}, defaultTask, { id: '6', title: 'Todo 6 (pinned)', state: Task.b.PINNED }),
      ]);
      __webpack_require__.d(__webpack_exports__, 'a', function() {
        return InboxScreen_InboxScreen;
      });
      var InboxScreen_InboxScreen = function InboxScreen(_ref) {
        var error = _ref.error,
          errorComponent = (_ref.errorInfo,
          react_default.a.createElement(
            'div',
            { className: 'wrapper-message' },
            react_default.a.createElement('span', { className: 'icon-face-sad' }),
            react_default.a.createElement('div', { className: 'title-message' }, 'Oh no!'),
            react_default.a.createElement('div', { className: 'subtitle-message' }, 'Somethig went wrong'),
          )),
          okComponent = react_default.a.createElement(
            react_default.a.Fragment,
            null,
            react_default.a.createElement(
              'nav',
              null,
              react_default.a.createElement(
                'h1',
                { className: 'title-page' },
                react_default.a.createElement('span', { className: 'title-wrapper' }, 'TaskBox'),
              ),
            ),
            react_default.a.createElement(TaskList.a, {
              loading: !1,
              tasks: defaultTasks,
              onArchive: function onArchive() {},
              onPin: function onPin() {},
            }),
          );
        return react_default.a.createElement(
          'div',
          { className: 'page lists-show' },
          error ? errorComponent : okComponent,
        );
      };
    },
    14: function(module, __webpack_exports__, __webpack_require__) {
      'use strict';
      __webpack_require__.r(__webpack_exports__),
        function(module) {
          __webpack_require__.d(__webpack_exports__, 'defaultTask', function() {
            return defaultTask;
          }),
            __webpack_require__.d(__webpack_exports__, 'actions', function() {
              return actions;
            }),
            __webpack_require__.d(__webpack_exports__, 'inboxTask', function() {
              return inboxTask;
            }),
            __webpack_require__.d(__webpack_exports__, 'longTitleTask', function() {
              return longTitleTask;
            }),
            __webpack_require__.d(__webpack_exports__, 'pinnedTask', function() {
              return pinnedTask;
            }),
            __webpack_require__.d(__webpack_exports__, 'archivedTask', function() {
              return archivedTask;
            });
          var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0),
            react__WEBPACK_IMPORTED_MODULE_0___default = __webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__),
            _storybook_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(18),
            _storybook_addon_knobs_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(93),
            _storybook_addon_a11y__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(201),
            _storybook_addon_actions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(52),
            immer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(51),
            _components_Task__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(5),
            defaultTask = {
              id: '1',
              title: 'Test',
              updatedAt: new Date(2019, 5, 27),
              state: _components_Task__WEBPACK_IMPORTED_MODULE_6__.b.INBOX,
            },
            setState = (function setTaskState(task) {
              return function(state) {
                return Object(immer__WEBPACK_IMPORTED_MODULE_5__.a)(task, function(draft) {
                  draft.state = state;
                });
              };
            })(defaultTask),
            setTitle = (function setTaskTitle(task) {
              return function(title) {
                return Object(immer__WEBPACK_IMPORTED_MODULE_5__.a)(task, function(draft) {
                  draft.title = title;
                });
              };
            })(defaultTask),
            actions = {
              onPin: Object(_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_4__.action)('PIN'),
              onArchive: Object(_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_4__.action)('ARCHIVE'),
            },
            inboxTask = function inboxTask() {
              return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                _components_Task__WEBPACK_IMPORTED_MODULE_6__.a,
                Object.assign(
                  {
                    task: Object(_storybook_addon_knobs_react__WEBPACK_IMPORTED_MODULE_2__.object)(
                      'task',
                      setState(_components_Task__WEBPACK_IMPORTED_MODULE_6__.b.INBOX),
                    ),
                  },
                  actions,
                ),
              );
            },
            longTitleTask = function longTitleTask() {
              return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                _components_Task__WEBPACK_IMPORTED_MODULE_6__.a,
                Object.assign(
                  {
                    task: Object(_storybook_addon_knobs_react__WEBPACK_IMPORTED_MODULE_2__.object)(
                      'task',
                      setTitle(
                        "This task's name is absurdly large. In fact, I think if I keep going I might end up with content overflow. What will happen? The star that represents a pinned task could have text overlapping. The text could cut-off abruptly when it reaches the star. I hope not",
                      ),
                    ),
                  },
                  actions,
                ),
              );
            },
            pinnedTask = function pinnedTask() {
              return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                _components_Task__WEBPACK_IMPORTED_MODULE_6__.a,
                Object.assign({ task: setState(_components_Task__WEBPACK_IMPORTED_MODULE_6__.b.PINNED) }, actions),
              );
            },
            archivedTask = function archivedTask() {
              return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                _components_Task__WEBPACK_IMPORTED_MODULE_6__.a,
                Object.assign({ task: setState(_components_Task__WEBPACK_IMPORTED_MODULE_6__.b.ARCHIVED) }, actions),
              );
            };
          Object(_storybook_react__WEBPACK_IMPORTED_MODULE_1__.storiesOf)('Task', module)
            .addDecorator(_storybook_addon_a11y__WEBPACK_IMPORTED_MODULE_3__.withA11y)
            .addDecorator(_storybook_addon_knobs_react__WEBPACK_IMPORTED_MODULE_2__.withKnobs)
            .addParameters({ viewport: { defaultViewport: 'iphonex' } })
            .add('inbox -- default', inboxTask)
            .add('long title', longTitleTask)
            .add('pinned', pinnedTask)
            .add('archived', archivedTask);
        }.call(this, __webpack_require__(62)(module));
    },
    203: function(module, exports, __webpack_require__) {
      __webpack_require__(204), __webpack_require__(289), (module.exports = __webpack_require__(290));
    },
    290: function(module, __webpack_exports__, __webpack_require__) {
      'use strict';
      __webpack_require__.r(__webpack_exports__),
        function(module) {
          var _storybook_react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(18);
          __webpack_require__(351), __webpack_require__(364);
          Object(_storybook_react__WEBPACK_IMPORTED_MODULE_0__.addParameters)({
            viewport: { defaultViewport: 'iphonex' },
          });
          var req = __webpack_require__(365);
          Object(_storybook_react__WEBPACK_IMPORTED_MODULE_0__.configure)(function loadStories() {
            __webpack_require__(454), req.keys().forEach(req);
          }, module);
        }.call(this, __webpack_require__(62)(module));
    },
    364: function(module, exports, __webpack_require__) {},
    365: function(module, exports, __webpack_require__) {
      var map = { './InboxScreen.stories.tsx': 366, './Task.stories.tsx': 14, './TaskList.stories.tsx': 453 };
      function webpackContext(req) {
        var id = webpackContextResolve(req);
        return __webpack_require__(id);
      }
      function webpackContextResolve(req) {
        if (!__webpack_require__.o(map, req)) {
          var e = new Error("Cannot find module '" + req + "'");
          throw ((e.code = 'MODULE_NOT_FOUND'), e);
        }
        return map[req];
      }
      (webpackContext.keys = function webpackContextKeys() {
        return Object.keys(map);
      }),
        (webpackContext.resolve = webpackContextResolve),
        (module.exports = webpackContext),
        (webpackContext.id = 365);
    },
    366: function(module, __webpack_exports__, __webpack_require__) {
      'use strict';
      __webpack_require__.r(__webpack_exports__),
        function(module) {
          var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0),
            react__WEBPACK_IMPORTED_MODULE_0___default = __webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__),
            _storybook_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(18),
            _components_InboxScreen__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(128);
          Object(_storybook_react__WEBPACK_IMPORTED_MODULE_1__.storiesOf)('InboxScreen', module)
            .add('default', function defaultInbox() {
              return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                _components_InboxScreen__WEBPACK_IMPORTED_MODULE_2__.a,
                null,
              );
            })
            .add('error', function error() {
              return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                _components_InboxScreen__WEBPACK_IMPORTED_MODULE_2__.a,
                { error: new Error('oups') },
              );
            });
        }.call(this, __webpack_require__(62)(module));
    },
    367: function(module, exports, __webpack_require__) {},
    368: function(module, exports, __webpack_require__) {},
    43: function(module, __webpack_exports__, __webpack_require__) {
      'use strict';
      __webpack_require__.d(__webpack_exports__, 'a', function() {
        return TaskList;
      });
      var C_Users_HaQadosch_Documents_Javascript_Storybook_Intro_StoryBook_Tuts_2_my_little_pony_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          92,
        ),
        react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(0),
        react__WEBPACK_IMPORTED_MODULE_1___default = __webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__),
        _Task__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5),
        TaskList = (__webpack_require__(367),
        function TaskList(_ref) {
          var loading = _ref.loading,
            origTasks = _ref.tasks,
            archive = _ref.onArchive,
            pin = _ref.onPin,
            _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__.useState)(origTasks),
            _useState2 = Object(
              C_Users_HaQadosch_Documents_Javascript_Storybook_Intro_StoryBook_Tuts_2_my_little_pony_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__.a,
            )(_useState, 2),
            tasks = _useState2[0],
            setTasks = _useState2[1],
            events = {
              onArchive: function onArchive(archivedTask) {
                setTasks(
                  tasks.map(function(task) {
                    return task.id === archivedTask.id ? archivedTask : task;
                  }),
                ),
                  archive(archivedTask);
              },
              onPin: function onPin(toggledTask) {
                setTasks(
                  tasks.map(function(task) {
                    return task.id === toggledTask.id ? toggledTask : task;
                  }),
                ),
                  pin(toggledTask);
              },
            },
            loadingRow = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
              'div',
              { className: 'loading-item' },
              react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement('span', { className: 'glow-checkbox' }),
              react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                'span',
                { className: 'glow-text' },
                react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement('span', null, 'Loading'),
                ' ',
                react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement('span', null, 'cool'),
                ' ',
                react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement('span', null, 'state'),
              ),
            );
          return loading
            ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                'div',
                { className: 'list-items' },
                loadingRow,
                loadingRow,
                loadingRow,
                loadingRow,
                loadingRow,
                loadingRow,
              )
            : 0 === tasks.length
            ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                'div',
                { className: 'list-items' },
                react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                  'div',
                  { className: 'wrapper-message' },
                  react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement('span', { className: 'icon-check' }),
                  react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                    'div',
                    { className: 'title-messag' },
                    'You have no tasks.',
                  ),
                  react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                    'div',
                    { className: 'subtitle-message' },
                    'Sit back and relax',
                  ),
                ),
              )
            : react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                'div',
                { className: 'list-items', 'data-testid': 'list-items' },
                tasks.map(function(task) {
                  return task.state !== _Task__WEBPACK_IMPORTED_MODULE_2__.b.ARCHIVED
                    ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                        _Task__WEBPACK_IMPORTED_MODULE_2__.a,
                        Object.assign({ key: task.id, task: task }, events),
                      )
                    : null;
                }),
              );
        });
    },
    453: function(module, __webpack_exports__, __webpack_require__) {
      'use strict';
      __webpack_require__.r(__webpack_exports__),
        function(module) {
          __webpack_require__.d(__webpack_exports__, 'defaultList', function() {
            return defaultList;
          }),
            __webpack_require__.d(__webpack_exports__, 'taskPinnedList', function() {
              return taskPinnedList;
            }),
            __webpack_require__.d(__webpack_exports__, 'loadingList', function() {
              return loadingList;
            }),
            __webpack_require__.d(__webpack_exports__, 'emptyList', function() {
              return emptyList;
            });
          var C_Users_HaQadosch_Documents_Javascript_Storybook_Intro_StoryBook_Tuts_2_my_little_pony_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
              91,
            ),
            C_Users_HaQadosch_Documents_Javascript_Storybook_Intro_StoryBook_Tuts_2_my_little_pony_node_modules_babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
              9,
            ),
            react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(0),
            react__WEBPACK_IMPORTED_MODULE_2___default = __webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__),
            _storybook_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(18),
            _components_TaskList__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(43),
            _components_Task__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(5),
            _Task_stories__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(14),
            defaultTasks = [
              Object(
                C_Users_HaQadosch_Documents_Javascript_Storybook_Intro_StoryBook_Tuts_2_my_little_pony_node_modules_babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__.a,
              )({}, _Task_stories__WEBPACK_IMPORTED_MODULE_6__.defaultTask, { id: '1', title: 'Todo 1' }),
              Object(
                C_Users_HaQadosch_Documents_Javascript_Storybook_Intro_StoryBook_Tuts_2_my_little_pony_node_modules_babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__.a,
              )({}, _Task_stories__WEBPACK_IMPORTED_MODULE_6__.defaultTask, { id: '2', title: 'Todo 2' }),
              Object(
                C_Users_HaQadosch_Documents_Javascript_Storybook_Intro_StoryBook_Tuts_2_my_little_pony_node_modules_babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__.a,
              )({}, _Task_stories__WEBPACK_IMPORTED_MODULE_6__.defaultTask, { id: '3', title: 'Todo 3' }),
              Object(
                C_Users_HaQadosch_Documents_Javascript_Storybook_Intro_StoryBook_Tuts_2_my_little_pony_node_modules_babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__.a,
              )({}, _Task_stories__WEBPACK_IMPORTED_MODULE_6__.defaultTask, { id: '4', title: 'Todo 4' }),
              Object(
                C_Users_HaQadosch_Documents_Javascript_Storybook_Intro_StoryBook_Tuts_2_my_little_pony_node_modules_babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__.a,
              )({}, _Task_stories__WEBPACK_IMPORTED_MODULE_6__.defaultTask, { id: '5', title: 'Todo 5' }),
              Object(
                C_Users_HaQadosch_Documents_Javascript_Storybook_Intro_StoryBook_Tuts_2_my_little_pony_node_modules_babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__.a,
              )({}, _Task_stories__WEBPACK_IMPORTED_MODULE_6__.defaultTask, { id: '6', title: 'Todo 6' }),
            ],
            withPinnedTask = [].concat(
              Object(
                C_Users_HaQadosch_Documents_Javascript_Storybook_Intro_StoryBook_Tuts_2_my_little_pony_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__.a,
              )(defaultTasks.slice(0, 5)),
              [
                Object(
                  C_Users_HaQadosch_Documents_Javascript_Storybook_Intro_StoryBook_Tuts_2_my_little_pony_node_modules_babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__.a,
                )({}, _Task_stories__WEBPACK_IMPORTED_MODULE_6__.defaultTask, {
                  id: '6',
                  title: 'Todo 6 (pinned)',
                  state: _components_Task__WEBPACK_IMPORTED_MODULE_5__.b.PINNED,
                }),
              ],
            ),
            defaultList = function defaultList() {
              return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(
                _components_TaskList__WEBPACK_IMPORTED_MODULE_4__.a,
                Object.assign({ loading: !1, tasks: defaultTasks }, _Task_stories__WEBPACK_IMPORTED_MODULE_6__.actions),
              );
            },
            taskPinnedList = function taskPinnedList() {
              return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(
                _components_TaskList__WEBPACK_IMPORTED_MODULE_4__.a,
                Object.assign(
                  { loading: !1, tasks: withPinnedTask },
                  _Task_stories__WEBPACK_IMPORTED_MODULE_6__.actions,
                ),
              );
            },
            loadingList = function loadingList() {
              return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(
                _components_TaskList__WEBPACK_IMPORTED_MODULE_4__.a,
                Object.assign({ loading: !0, tasks: [] }, _Task_stories__WEBPACK_IMPORTED_MODULE_6__.actions),
              );
            },
            emptyList = function emptyList() {
              return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(
                _components_TaskList__WEBPACK_IMPORTED_MODULE_4__.a,
                Object.assign({ loading: !1, tasks: [] }, _Task_stories__WEBPACK_IMPORTED_MODULE_6__.actions),
              );
            };
          Object(_storybook_react__WEBPACK_IMPORTED_MODULE_3__.storiesOf)('TaskList', module)
            .add('default', defaultList)
            .add('1 taks pinned', taskPinnedList)
            .add('loading', loadingList)
            .add('empty', emptyList);
        }.call(this, __webpack_require__(62)(module));
    },
    454: function(module, __webpack_exports__, __webpack_require__) {
      'use strict';
      __webpack_require__.r(__webpack_exports__),
        function(module) {
          var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0),
            react__WEBPACK_IMPORTED_MODULE_0___default = __webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__),
            _storybook_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(18),
            _storybook_addon_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(52),
            _storybook_addon_links__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(202),
            _storybook_react_demo__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(94);
          Object(_storybook_react__WEBPACK_IMPORTED_MODULE_1__.storiesOf)('Welcome', module).add(
            'to Storybook',
            function() {
              return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                _storybook_react_demo__WEBPACK_IMPORTED_MODULE_4__.Welcome,
                { showApp: Object(_storybook_addon_links__WEBPACK_IMPORTED_MODULE_3__.linkTo)('Button') },
              );
            },
          ),
            Object(_storybook_react__WEBPACK_IMPORTED_MODULE_1__.storiesOf)('Button', module)
              .add('with text', function() {
                return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                  _storybook_react_demo__WEBPACK_IMPORTED_MODULE_4__.Button,
                  { onClick: Object(_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_2__.action)('clicked') },
                  'Hello Button',
                );
              })
              .add('with some emoji', function() {
                return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                  _storybook_react_demo__WEBPACK_IMPORTED_MODULE_4__.Button,
                  { onClick: Object(_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_2__.action)('clicked') },
                  react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    'span',
                    { role: 'img', 'aria-label': 'so cool' },
                    '😀 😎 👍 💯',
                  ),
                );
              });
        }.call(this, __webpack_require__(62)(module));
    },
    5: function(module, __webpack_exports__, __webpack_require__) {
      'use strict';
      __webpack_require__.d(__webpack_exports__, 'b', function() {
        return TaskState;
      }),
        __webpack_require__.d(__webpack_exports__, 'a', function() {
          return Task;
        });
      var TaskState,
        C_Users_HaQadosch_Documents_Javascript_Storybook_Intro_StoryBook_Tuts_2_my_little_pony_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          92,
        ),
        react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(0),
        react__WEBPACK_IMPORTED_MODULE_1___default = __webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__),
        immer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(51);
      !(function(TaskState) {
        (TaskState.INBOX = 'INBOX'), (TaskState.PINNED = 'PINNED'), (TaskState.ARCHIVED = 'ARCHIVED');
      })(TaskState || (TaskState = {}));
      var Task = function Task(_ref) {
        var initTask = _ref.task,
          onArchive = _ref.onArchive,
          onPin = _ref.onPin,
          _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__.useState)(initTask),
          _useState2 = Object(
            C_Users_HaQadosch_Documents_Javascript_Storybook_Intro_StoryBook_Tuts_2_my_little_pony_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__.a,
          )(_useState, 2),
          _useState2$ = _useState2[0],
          id = _useState2$.id,
          title = _useState2$.title,
          state = _useState2$.state,
          updatedAt = _useState2$.updatedAt,
          setTask = _useState2[1];
        return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
          'article',
          { className: 'list-item '.concat(state), 'data-testid': 'list-item '.concat(state) },
          react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
            'label',
            { className: 'checkbox' },
            react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement('input', {
              type: 'checkbox',
              name: 'checked',
              defaultChecked: state === TaskState.ARCHIVED,
              disabled: !0,
            }),
            react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement('span', {
              className: 'checkbox-custom',
              onClick: function archive() {
                var archivedTask = Object(immer__WEBPACK_IMPORTED_MODULE_2__.a)(
                  { id: id, title: title, state: state, updatedAt: updatedAt },
                  function(draft) {
                    draft.state = TaskState.ARCHIVED;
                  },
                );
                setTask(archivedTask), onArchive(archivedTask);
              },
            }),
          ),
          react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
            'section',
            { className: 'title' },
            react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement('input', {
              type: 'text',
              value: title,
              name: title,
              style: { textOverflow: 'ellipsis' },
              readOnly: !0,
              placeholder: 'input title',
              'aria-label': title,
            }),
          ),
          react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
            'section',
            {
              className: 'actions',
              onClick: function onClick(evt) {
                return evt.stopPropagation();
              },
            },
            state !== TaskState.ARCHIVED
              ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                  'button',
                  {
                    onClick: function togglePin() {
                      var pinnedTask = Object(immer__WEBPACK_IMPORTED_MODULE_2__.a)(
                        { id: id, title: title, state: state, updatedAt: updatedAt },
                        function(draft) {
                          (draft.state = draft.state === TaskState.PINNED ? TaskState.INBOX : TaskState.PINNED),
                            (draft.updatedAt = new Date(Date.now()));
                        },
                      );
                      setTask(pinnedTask), onPin(pinnedTask);
                    },
                  },
                  react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement('span', { className: 'icon-star' }),
                )
              : null,
          ),
        );
      };
    },
  },
  [[203, 1, 2]],
]);
//# sourceMappingURL=main.3f3c8e4419802d920c52.bundle.js.map
