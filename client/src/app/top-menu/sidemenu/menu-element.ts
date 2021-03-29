export const adminmenus = [
    {
        'name': 'Dashboard',
        'icon': 'dashboard',
        'open': true,
        // 'chip': { 'value': 1, 'color': 'accent' },
        'link': '/dashboard',
        'Tooltip':'DashBoard'
    },
    {
        'name'   : 'Employees',
        'icon'   : 'employee',
        'open'   : false,
        'link'   : false,
        'sub'    :  [
                        {
                            'name': 'Add Employee',
                            'icon': 'add_employee',
                            'open'   : false,
                            'chip': false,
                            'link':'/employees/addemployees',
                            'Tooltip':'AddEmployee'
                        },
                        {
                            'name': 'List Employee',
                            'icon': 'list_employee',
                            'open': false,
                            'chip': false,
                            'link':'/employees/listemployees',
                            'Tooltip':'ListEmployee'
                        }
                    ]
    },
    {
        'name'   : 'Products',
        'icon'   : 'product',
        'open'   : false,
        'link'   : false,
        'sub'    :  [
                        {
                            'name': 'Glasses',
                            'icon': 'spects',
                            'open'   : false,
                            'link':false,
                            'sub':[
                                {
                                    'name': 'Frame Model',
                                    'icon': 'frame_type',
                                    'open' : false,
                                    'link':'/products/glasses/frame_model',
                                    'Tooltip':'FrameModel'
                                },
                                    // {
                                    //     'name': 'Frame Material',
                                    //     'icon': 'frame_material',
                                    //     'open' : false,
                                    //     'link':'/products/glasses/frame_material',
                                    //     'Tooltip':'FrameMaterial'
                                    // },
                                    // {
                                    //     'name': 'Frame Type',
                                    //     'icon': 'frame_type',
                                    //     'open': false,
                                    //     'link':'/products/glasses/frame_type',
                                    //     'Tooltip':'FrameType'
                                    // },
                                    {
                                        'name': 'Lens Type',
                                        'icon': 'lens',
                                        'open': false,
                                        'link':'/products/glasses/lens_type',
                                        'Tooltip':'LensType'
                                    },
                                    {
                                        'name': 'Brand',
                                        'icon': 'brand',
                                        'open'   : false,
                                        'link':'/products/brands/brand',
                                        'Tooltip':'Brand'
                                    },
                            
                        ]
                        },
                        {
                            'name': 'Boxes',
                            'icon': 'box',
                            'open'   : false,
                            'link':'/products/boxes/box_model',
                            'Tooltip':'Boxes'
                        }
                    ]
    },
]
    export const Employee_menus = [
        
       {
            'name'   : 'Employees',
            'icon'   : 'employee',
            'open'   : false,
            'link'   : false,
            'sub'    :  [
                            {
                                'name': 'List Employee',
                                'icon': 'list_employee',
                                'open'   : false,
                                'link':'/employees/listemployees'
                            }
                        ]
        },
        {
            'name'   : 'Products',
            'icon'   : 'product',
            'open'   : false,
            'link'   : false,
            'sub'    :  [
                            {
                                'name': 'Glasses',
                                'icon': 'spects',
                                'open'   : false,
                                'link':false,
                                'sub':[
                                    {
                                        'name': 'Frame Model',
                                        'icon': 'frame_type',
                                        'open' : false,
                                        'link':'/products/glasses/frame_model',
                                        'Tooltip':'FrameModel'
                                    },
                                        {
                                            'name': 'Lens Type',
                                            'icon': 'lens',
                                            'open': false,
                                            'link':'/products/glasses/lens_type',
                                            'Tooltip':'LensType'
                                        },
                                        {
                                            'name': 'Brand',
                                            'icon': 'brand',
                                            'open'   : false,
                                            'link':'/products/brands/brand',
                                            'Tooltip':'Brand'
                                        },
                                
                            ]
                            },
                            {
                                'name': 'Boxes',
                                'icon': 'box',
                                'open'   : false,
                                'link':'/products/boxes/box_model',
                                'Tooltip':'Boxes'
                            }
                        ]
        },
    // {
    //     'name': 'Material Widget',
    //     'icon': 'widgets',
    //     'link': false,
    //     'open': false,
    //     'sub': [
    //         {
    //             'name': 'Buttons',
    //             'link': 'material-widgets/buttons',
    //             'icon': 'indeterminate_check_box',
    //             'chip': false,
    //             'open': false,
    //         },
    //         {
    //             'name': 'List',
    //             'link': 'material-widgets/list',
    //             'icon': 'list',
    //             'chip': false,
    //             'open': false,
    //         },
    //         {

    //             'name': 'Stepper',
    //             'link': 'material-widgets/stepper',
    //             'icon': 'view_week',
    //             'chip': false,
    //             'open': false,

    //         },
    //         {
    //             'name': 'Expansion',
    //             'link': 'material-widgets/expansion',
    //             'icon': 'web_aaset',
    //             'chip': false,
    //             'open': false,
    //         },
    //         {
    //             'name': 'Progress Spinner',
    //             'link': 'material-widgets/spinner',
    //             'icon': 'cached',
    //             'chip': false,
    //             'open': false,
    //         },
    //         {
    //             'name': 'Cards',
    //             'link': 'material-widgets/cards',
    //             'icon': 'crop_16_9',
    //             'chip': false,
    //             'open': false,
    //         },
    //         {
    //             'name': 'Icons',
    //             'link': 'material-widgets/icons',
    //             'icon': 'gif',
    //             'chip': false,
    //             'open': false,
    //         },
    //         {

    //             'name': 'AutoComplete',
    //             'link': 'material-widgets/autocomplete',
    //             'icon': 'get_app',
    //             'chip': false,
    //             'open': false,
    //         },
    //         {
    //             'name': 'CheckBox',
    //             'link': 'material-widgets/checkbox',
    //             'icon': 'check_box',
    //             'chip': false,
    //             'open': false,
    //         },
    //         {
    //             'name': 'DatePicker',
    //             'link': 'material-widgets/datepicker',
    //             'icon': 'date_range',
    //             'chip': false,
    //             'open': false,
    //         },

    //         {
    //             'name': 'Slider',
    //             'link': 'material-widgets/slider',
    //             'icon': 'keyboard_tab',
    //             'chip': false,
    //             'open': false,
    //         },
    //         {
    //             'name': 'Slide Toggle',
    //             'link': 'material-widgets/slide-toggle',
    //             'icon': 'album',
    //             'chip': false,
    //             'open': false,
    //         },
    //         {
    //             'name': 'Menu',
    //             'icon': 'menu',
    //             'link': 'material-widgets/menu',
    //             'chip': false,
    //             'open': false,
    //         },
    //         {
    //             'name': 'Progress Bar',
    //             'link': 'material-widgets/progress-bar',
    //             'icon': 'trending_flat',
    //             'chip': false,
    //             'open': false,
    //         },
    //         {
    //             'name': 'Input',
    //             'icon': 'input',
    //             'link': 'material-widgets/input',
    //             'open': false,
    //         },
    //         {
    //             'name': 'Radio',
    //             'icon': 'radio_button_checked',
    //             'link': 'material-widgets/radio',
    //             'chip': false,
    //             'open': false,
    //         },
    //         {
    //             'name': 'Select',
    //             'icon': 'select_all',
    //             'link': 'material-widgets/select',
    //             'open': false,
    //         },
    //     ]
    // },
    
    // {
    //     'name': 'Tables',
    //     'icon': 'list',
    //     'link': false,
    //     'open': false,
    //     'chip': { 'value': 2, 'color': 'accent' },
    //     'sub': [
    //         {
    //             'name': 'Fixed',
    //             'icon': 'filter_list',
    //             'link': 'tables/fixed',
    //             'open': false,
    //         },
    //         {
    //             'name': 'Feature',
    //             'icon': 'done_all',
    //             'link': 'tables/featured',
    //             'open': false,
    //         },
    //         {
    //             'name': 'Responsive Tables',
    //             'icon': 'filter_center_focus',
    //             'link': 'tables/responsive',
    //             'open': false,
    //         }
    //     ]

    // },
    // {
    //     'name': 'Guarded Routes',
    //     'icon': 'mode_edit',
    //     'link': '/guarded-routes',
    //     'open': false,
    // }, {
    //     'name': 'Scrumboard',
    //     'open': false,
    //     'link': '/scrumboard',
    //     'icon': 'grade',
    // }, {
    //     'name': 'Applications',
    //     'icon': 'view_module',
    //     'open': false,
    //     'link': false,
    //     'sub': [
    //         {
    //             'name': 'chat',
    //             'icon': 'chat',
    //             'link': 'chats/chat',
    //             'open': false,
    //         },
    //         {
    //             'name': 'mail',
    //             'icon': 'mail',
    //             'link': 'mail/mail',
    //             'open': false,
    //         },
    //         {
    //             'name': 'Editor',
    //             'icon': 'editor',
    //             'link': 'editor/editor',
    //             'open': false,
    //         }
    //     ]
    // }
    // , {
    //     'name': 'Pages',
    //     'icon': 'content_copy',
    //     'open': false,
    //     'link': false,
    //     'sub': [
    //         {
    //             'name': 'Login',
    //             'icon': 'work',
    //             'open': false,
    //             'link': '../login',
    //         }, {
    //             'name': 'Services',
    //             'icon': 'local_laundry_service',
    //             'open': false,
    //             'link': 'pages/services',
    //         }, {
    //             'name': 'Contact',
    //             'icon': 'directions',
    //             'open': false,
    //             'link': 'pages/contact'
    //         }
    //     ]
    // }
    // , {

    //     'name': 'Charts',
    //     'icon': 'pie_chart_outlined',
    //     'open': false,
    //     'link': false,
    //     'sub': [
    //         {
    //             'name': 'chartjs',
    //             'icon': 'view_list',
    //             'link': 'charts/chartjs',
    //             'open': false,

    //         },
    //         {
    //             'name': 'ngx-chart',
    //             'icon': 'show_chart',
    //             'open': false,
    //             'link': 'charts/ngx-charts',
    //         },
    //         {
    //             'name': 'nvd3',
    //             'icon': 'pie_chart',
    //             'open': false,
    //             'link': 'charts/nvd3-charts',
    //         }
    //     ]
    // }, {
    //     'name': 'maps',
    //     'icon': 'map',
    //     'open': false,
    //     'link': false,
    //     'sub': [
    //         {
    //             'name': 'google-map',
    //             'icon': 'directions',
    //             'link': 'maps/googlemap',
    //             'open': false,
    //         },
    //         {
    //             'name': 'leaflet-map',
    //             'icon': 'directions',
    //             'link': 'maps/leafletmap',
    //             'open': false,
    //         }
    //     ]
    // }
];
