const teamsData = [
  { username: 'Samppa Nori', registered: '2012/01/01', role: 'Member', status: 'Active'},
  { username: 'Estavan Lykos', registered: '2012/02/01', role: 'Staff', status: 'Banned'},
  { username: 'Chetan Mohamed', registered: '2012/02/01', role: 'Admin', status: 'Inactive'},
  { username: 'Derick Maximinus', registered: '2012/03/01', role: 'Member', status: 'Pending'},
  { username: 'Friderik Dávid', registered: '2012/01/21', role: 'Staff', status: 'Active'},
  { username: 'Yiorgos Avraamu', registered: '2012/01/01', role: 'Member', status: 'Active'},
  { username: 'Avram Tarasios', registered: '2012/02/01', role: 'Staff', status: 'Banned', _classes: 'table-success'},
  { username: 'Quintin Ed', registered: '2012/02/01', role: 'Admin', status: 'Inactive'},
  { username: 'Enéas Kwadwo', registered: '2012/03/01', role: 'Member', status: 'Pending'},
  { username: 'Agapetus Tadeáš', registered: '2012/01/21', role: 'Staff', status: 'Active'},
  { username: 'Carwyn Fachtna', registered: '2012/01/01', role: 'Member', status: 'Active', _classes: 'table-success'},
  { username: 'Nehemiah Tatius', registered: '2012/02/01', role: 'Staff', status: 'Banned'},
  { username: 'Ebbe Gemariah', registered: '2012/02/01', role: 'Admin', status: 'Inactive'},
  { username: 'Eustorgios Amulius', registered: '2012/03/01', role: 'Member', status: 'Pending'},
  { username: 'Leopold Gáspár', registered: '2012/01/21', role: 'Staff', status: 'Active'},
  { username: 'Pompeius René', registered: '2012/01/01', role: 'Member', status: 'Active'},
  { username: 'Paĉjo Jadon', registered: '2012/02/01', role: 'Staff', status: 'Banned'},
  { username: 'Micheal Mercurius', registered: '2012/02/01', role: 'Admin', status: 'Inactive'},
  { username: 'Ganesha Dubhghall', registered: '2012/03/01', role: 'Member', status: 'Pending'},
  { username: 'Hiroto Šimun', registered: '2012/01/21', role: 'Staff', status: 'Active'},
  { username: 'Vishnu Serghei', registered: '2012/01/01', role: 'Member', status: 'Active'},
  { username: 'Zbyněk Phoibos', registered: '2012/02/01', role: 'Staff', status: 'Banned'},
  { username: 'Einar Randall', registered: '2012/02/01', role: 'Admin', status: 'Inactive', _classes: 'table-danger'},
  { username: 'Félix Troels', registered: '2012/03/21', role: 'Staff', status: 'Active'},
  { username: 'Aulus Agmundr', registered: '2012/01/01', role: 'Member', status: 'Pending'}
]

const fields = [
    { key: 'index', _style: { width: '3%'}  ,'label':'No'},
	{ key: 'button_td', _style: { width: '500px'}  ,'label':'Action'},
    { key: 'id', _style: { width: '10%'}  ,'label':'Id'},
    { key: 'name', _style: { width: '20%'} ,'label':'Name'},
	{ key: 'address', _style: { width: '20%'} ,'label':'Address'},
	{ key: 'phone', _style: { width: '150px'} ,'label':'Phone'},
	{ key: 'website', _style: { width: '150px'} ,'label':'Website'},
	{ key: 'email', _style: { width: '150px'} ,'label':'Email'},
	{ key: 'founded', _style: { width: '150px'} ,'label':'Founded'},
	{ key: 'clubColors', _style: { width: '150px'} ,'label':'Club Colors'},
	{ key: 'venue', _style: { width: '150px'} ,'label':'Venue'}
  ]


export {teamsData,fields}

