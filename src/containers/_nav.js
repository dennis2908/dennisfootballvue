export default [
  {
    _name: 'CSidebarNav',
    _children: [
	  {
        _name: 'CSidebarNavDropdown',
        name: 'Areas',
        route: '/areas',
        icon: 'cil-puzzle',
        items: [
          {
            name: 'List Areas',
            to: '/areas/list'
          }
        ]
      },
      {
        _name: 'CSidebarNavDivider',
        _class: 'm-2'
      }
    ]
  }
]