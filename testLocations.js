const towns = [{
	name: 'Tahorakui',
	lat: -38.47896,
	long: 76.27242,
	isFound: false
},
{
	name: 'Bartlett',
	lat: -38.85,
	long: 77.88333,
	isFound: false
},
{
	name: 'Arthur’s Pass',
	lat: -42.95,
	long: 71.56667,
	isFound: false
},
{
	name: 'Yaldhurst',
	lat: -43.51667,
	long: 72.51667,
	isFound: false
},
{
	name: 'Wyndham',
	lat: -46.33333,
	long: 68.85,
	isFound: false
},
{
	name: 'Wreys Bush',
	lat: -46.01667,
	long: 68.1,
	isFound: false
},
{
	name: 'Woodside',
	lat: -45.86667,
	long: 70.18333,
	isFound: false
},
{
	name: 'Woodside',
	lat: -41.06667,
	long: 75.4,
	isFound: false
},
{
	name: 'Woodleigh',
	lat: -37.53134,
	long: 74.90269,
	isFound: false
},
{
	name: 'Woodlands',
	lat: -46.36667,
	long: 68.55,
	isFound: false
},
{
	name: 'Woodhill',
	lat: -36.75,
	long: 74.43333,
	isFound: false
},
{
	name: 'Woodend',
	lat: -46.46667,
	long: 68.38333,
	isFound: false
},
{
	name: 'Woodend',
	lat: -43.31667,
	long: 72.66667,
	isFound: false
},
{
	name: 'Woodcocks',
	lat: -36.45,
	long: 74.56667,
	isFound: false
},
{
	name: 'Woodbury',
	lat: -44.03333,
	long: 71.2,
	isFound: false
},
{
	name: 'Woodbourne',
	lat: -41.5,
	long: 73.91667,
	isFound: false
},
{
	name: 'Wiritoa',
	lat: -39.96667,
	long: 75.1,
	isFound: false
},
{
	name: 'Winslow',
	lat: -43.95,
	long: 71.65,
	isFound: false
},
{
	name: 'Winscombe',
	lat: -44,
	long: 170.83333,
	isFound: false
},
{
	name: 'Wingatui',
	lat: -45.88333,
	long: 70.38333,
	isFound: false
},
{
	name: 'Windwhistle',
	lat: -43.5,
	long: 71.68333,
	isFound: false
},
{
	name: 'Windsor',
	lat: -45,
	long: 170.8,
	isFound: false
},
{
	name: 'Windermere',
	lat: -43.98333,
	long: 71.61667,
	isFound: false
},
{
	name: 'Winchmore',
	lat: -43.83333,
	long: 71.71667,
	isFound: false
},
{
	name: 'Winchester',
	lat: -44.2,
	long: 71.28333,
	isFound: false
},
{
	name: 'Wimbledon',
	lat: -40.44104,
	long: 76.50759,
	isFound: false
},
{
	name: 'Willowby',
	lat: -43.98333,
	long: 71.68333,
	isFound: false
},
{
	name: 'Willowbridge',
	lat: -44.78333,
	long: 71.11667,
	isFound: false
},
{
	name: 'Wigram',
	lat: -43.55,
	long: 72.55,
	isFound: false
},
{
	name: 'Whitstone',
	lat: -45.06667,
	long: 70.88333,
	isFound: false
},
{
	name: 'Whitianga',
	lat: -36.83333,
	long: 75.7,
	isFound: false
},
{
	name: 'Whitford',
	lat: -36.93333,
	long: 74.96667,
	isFound: false
},
{
	name: 'Whitehall',
	lat: -37.88333,
	long: 75.56667,
	isFound: false
},
{
	name: 'Whitecliffs',
	lat: -43.46667,
	long: 71.9,
	isFound: false
},
{
	name: 'Whirinaki',
	lat: -35.48333,
	long: 73.46667,
	isFound: false
},
{
	name: 'Whenuatonga',
	lat: -45.71667,
	long: 68.65,
	isFound: false
},
{
	name: 'Whenuapai',
	lat: -36.76667,
	long: 74.65,
	isFound: false
},
{
	name: 'Whenuakoa',
	lat: -45.95,
	long: 69.63333,
	isFound: false
},
{
	name: 'Whenuakite',
	lat: -36.9,
	long: 75.76667,
	isFound: false
},
{
	name: 'Wheatstone',
	lat: -44.01667,
	long: 71.75,
	isFound: false
},
{
	name: 'Whatoro',
	lat: -35.75,
	long: 73.68333,
	isFound: false
},
{
	name: 'Whatawhata',
	lat: -37.8,
	long: 75.15,
	isFound: false
},
{
	name: 'Whatatutu',
	lat: -38.38333,
	long: 77.83333,
	isFound: false
},
{
	name: 'Whataroa',
	lat: -43.28333,
	long: 70.41667,
	isFound: false
},
{
	name: 'Whatanihi',
	lat: -41.23333,
	long: 73.85,
	isFound: false
},
{
	name: 'Wharua',
	lat: -44.7,
	long: 70.51667,
	isFound: false
},
{
	name: 'Whareroa',
	lat: -39.61667,
	long: 74.26667,
	isFound: false
},
{
	name: 'Wharepuhunga',
	lat: -38.13333,
	long: 75.45,
	isFound: false
},
{
	name: 'Whareponga',
	lat: -37.96667,
	long: 78.36667,
	isFound: false
},
{
	name: 'Wharepoa',
	lat: -37.26667,
	long: 75.63333,
	isFound: false
},
{
	name: 'Wharepapa',
	lat: -36.71667,
	long: 74.43333,
	isFound: false
},
{
	name: 'Wharepaina',
	lat: -38.4,
	long: 76.33333,
	isFound: false
},
{
	name: 'Whareorino',
	lat: -38.46667,
	long: 74.66667,
	isFound: false
},
{
	name: 'Wharekuri',
	lat: -44.69971,
	long: 70.43514,
	isFound: false
},
{
	name: 'Wharekopae',
	lat: -38.55,
	long: 77.5,
	isFound: false
},
{
	name: 'Wharehuia',
	lat: -39.3,
	long: 74.33333,
	isFound: false
},
{
	name: 'Wharehuanui',
	lat: -44.95,
	long: 68.76667,
	isFound: false
},
{
	name: 'Wharehine',
	lat: -36.31667,
	long: 74.41667,
	isFound: false
},
{
	name: 'Whareama',
	lat: -40.93333,
	long: 76.05,
	isFound: false
},
{
	name: 'Wharanui',
	lat: -41.91667,
	long: 74.1,
	isFound: false
},
{
	name: 'Whangateau',
	lat: -36.3,
	long: 74.76667,
	isFound: false
},
{
	name: 'Whangaruru South',
	lat: -35.38333,
	long: 74.35,
	isFound: false
},
{
	name: 'Whangaruru North',
	lat: -35.35,
	long: 74.35,
	isFound: false
},
{
	name: 'Whangaroa',
	lat: -35.05,
	long: 73.75,
	isFound: false
},
{
	name: 'Whangarei Heads',
	lat: -35.81667,
	long: 74.5,
	isFound: false
},
{
	name: 'Whangarata',
	lat: -37.25954,
	long: 74.99345,
	isFound: false
},
{
	name: 'Whangara',
	lat: -38.56667,
	long: 78.21667,
	isFound: false
},
{
	name: 'Whangapoua',
	lat: -36.71667,
	long: 75.61667,
	isFound: false
},
{
	name: 'Whangape',
	lat: -35.35,
	long: 73.21667,
	isFound: false
},
{
	name: 'Whangaparaoa',
	lat: -36.63333,
	long: 74.76667,
	isFound: false
},
{
	name: 'Whangapara',
	lat: -36.23333,
	long: 75.4,
	isFound: false
},
{
	name: 'Whangamumu',
	lat: -35.2513,
	long: 74.28891,
	isFound: false
},
{
	name: 'Whangamomona',
	lat: -39.14456,
	long: 74.73532,
	isFound: false
},
{
	name: 'Whangamata',
	lat: -37.2,
	long: 75.86667,
	isFound: false
},
{
	name: 'Whangamarino',
	lat: -37.34914,
	long: 75.11349,
	isFound: false
},
{
	name: 'Whangakoko',
	lat: -41.28333,
	long: 74.16667,
	isFound: false
},
{
	name: 'Whangaehu',
	lat: -40.00747,
	long: 75.16876,
	isFound: false
},
{
	name: 'Whananaki South',
	lat: -35.51667,
	long: 74.45,
	isFound: false
},
{
	name: 'Whananaki',
	lat: -35.5,
	long: 74.45,
	isFound: false
},
{
	name: 'Whakatu',
	lat: -39.6,
	long: 76.88333,
	isFound: false
},
{
	name: 'Whakatiri',
	lat: -36.95,
	long: 75.11667,
	isFound: false
},
{
	name: 'Whakatahuri',
	lat: -41.01667,
	long: 74.03333,
	isFound: false
},
{
	name: 'Whakarongo',
	lat: -40.33333,
	long: 75.66667,
	isFound: false
},
{
	name: 'Whakapirau',
	lat: -36.15,
	long: 74.25,
	isFound: false
},
{
	name: 'Whakapara',
	lat: -35.53333,
	long: 74.28333,
	isFound: false
},
{
	name: 'Whakamara',
	lat: -39.63333,
	long: 74.43333,
	isFound: false
},
{
	name: 'Whakaki',
	lat: -39.03333,
	long: 77.6,
	isFound: false
},
{
	name: 'Whakaihuwaka',
	lat: -39.76667,
	long: 75.15,
	isFound: false
},
{
	name: 'Whakahoro',
	lat: -39.1,
	long: 75.06667,
	isFound: false
},
{
	name: 'Whakaangiangi',
	lat: -37.71667,
	long: 78.3,
	isFound: false
},
{
	name: 'Weymouth',
	lat: -37.03333,
	long: 74.86667,
	isFound: false
},
{
	name: 'Wetheral',
	lat: -43.36667,
	long: 72.58333,
	isFound: false
},
{
	name: 'Westshore',
	lat: -39.47688,
	long: 76.88151,
	isFound: false
},
{
	name: 'West Plains',
	lat: -46.36667,
	long: 68.31667,
	isFound: false
},
{
	name: 'Weston',
	lat: -45.08333,
	long: 70.91667,
	isFound: false
},
{
	name: 'Westmere',
	lat: -39.9,
	long: 175,
	isFound: false
},
{
	name: 'West Melton',
	lat: -43.51667,
	long: 72.36667,
	isFound: false
},
{
	name: 'West Kyle',
	lat: -43.93333,
	long: 72.06667,
	isFound: false
},
{
	name: 'West Eyreton',
	lat: -43.35,
	long: 72.38333,
	isFound: false
},
{
	name: 'Westerfield',
	lat: -43.83333,
	long: 71.61667,
	isFound: false
},
{
	name: 'Wendon Valley',
	lat: -45.88333,
	long: 68.96667,
	isFound: false
},
{
	name: 'Wendonside',
	lat: -45.75,
	long: 68.73333,
	isFound: false
},
{
	name: 'Wendon',
	lat: -45.88333,
	long: 68.81667,
	isFound: false
},
{
	name: 'Wellsford',
	lat: -36.28333,
	long: 74.51667,
	isFound: false
},
{
	name: 'Wellington',
	lat: -41.28664,
	long: 74.77557,
	isFound: false
},
{
	name: 'Welds Hill',
	lat: -41.78333,
	long: 73.85,
	isFound: false
},
{
	name: 'Wekaweka',
	lat: -35.56667,
	long: 73.55,
	isFound: false
},
{
	name: 'Wehenga',
	lat: -45.73333,
	long: 70.18333,
	isFound: false
},
{
	name: 'Fox Glacier',
	lat: -43.46485,
	long: 70.01678,
	isFound: false
},
{
	name: 'Weedons',
	lat: -43.58333,
	long: 72.4,
	isFound: false
},
{
	name: 'Wedderburn',
	lat: -45.03333,
	long: 70.01667,
	isFound: false
},
{
	name: 'Weber',
	lat: -40.40157,
	long: 76.31117,
	isFound: false
},
{
	name: 'Wayby',
	lat: -36.33333,
	long: 74.56667,
	isFound: false
},
{
	name: 'Waverley',
	lat: -39.76667,
	long: 74.63333,
	isFound: false
},
{
	name: 'Waterton',
	lat: -44.06667,
	long: 71.75,
	isFound: false
},
{
	name: 'Washdyke',
	lat: -44.35,
	long: 71.23333,
	isFound: false
},
{
	name: 'Warwick Junction',
	lat: -42.13333,
	long: 72.23333,
	isFound: false
},
{
	name: 'Warrington',
	lat: -45.71667,
	long: 70.58333,
	isFound: false
},
{
	name: 'Waro',
	lat: -35.58333,
	long: 74.3,
	isFound: false
},
{
	name: 'Warkworth',
	lat: -36.4,
	long: 74.66667,
	isFound: false
},
{
	name: 'Warepa',
	lat: -46.25,
	long: 69.58333,
	isFound: false
},
{
	name: 'Warea',
	lat: -39.23333,
	long: 73.81667,
	isFound: false
},
{
	name: 'Ward',
	lat: -41.83333,
	long: 74.13333,
	isFound: false
},
{
	name: 'Wanstead',
	lat: -40.13333,
	long: 76.53333,
	isFound: false
},
{
	name: 'Wangapeka Valley',
	lat: -41.35,
	long: 72.11667,
	isFound: false
},
{
	name: 'Wangapeka',
	lat: -41.41667,
	long: 72.65,
	isFound: false
},
{
	name: 'Whanganui',
	lat: -39.93333,
	long: 75.05,
	isFound: false
},
{
	name: 'Wangaloa',
	lat: -46.28333,
	long: 69.91667,
	isFound: false
},
{
	name: 'Walton',
	lat: -37.73333,
	long: 75.68333,
	isFound: false
},
{
	name: 'Wallsend',
	lat: -42.46667,
	long: 71.3,
	isFound: false
},
{
	name: 'Wallingford',
	lat: -40.21667,
	long: 76.6,
	isFound: false
},
{
	name: 'Wallaceville',
	lat: -41.13333,
	long: 75.05,
	isFound: false
},
{
	name: 'Wallacetown',
	lat: -46.33333,
	long: 68.28333,
	isFound: false
},
{
	name: 'Wakefield',
	lat: -41.4,
	long: 73.05,
	isFound: false
},
{
	name: 'Wakarara',
	lat: -39.78333,
	long: 76.26667,
	isFound: false
},
{
	name: 'Wakapuaka',
	lat: -41.20639,
	long: 73.3575,
	isFound: false
},
{
	name: 'Wakapatu',
	lat: -46.36667,
	long: 67.8,
	isFound: false
},
{
	name: 'Wakanui',
	lat: -43.96667,
	long: 71.81667,
	isFound: false
},
{
	name: 'Waiwhiu',
	lat: -36.36667,
	long: 74.6,
	isFound: false
},
{
	name: 'Waiwera South',
	lat: -46.21667,
	long: 69.5,
	isFound: false
},
{
	name: 'Waiwera',
	lat: -36.55,
	long: 74.71667,
	isFound: false
},
{
	name: 'Waiuta',
	lat: -42.3,
	long: 71.81667,
	isFound: false
},
{
	name: 'Waiuku',
	lat: -37.24806,
	long: 74.73489,
	isFound: false
},
{
	name: 'Waituna West',
	lat: -40.05,
	long: 75.61667,
	isFound: false
},
{
	name: 'Waituna',
	lat: -46.41667,
	long: 68.63333,
	isFound: false
},
{
	name: 'Waitotara',
	lat: -39.8,
	long: 74.73333,
	isFound: false
},
{
	name: 'Waitomo Caves',
	lat: -38.26667,
	long: 75.1,
	isFound: false
},
{
	name: 'Waitoitoi',
	lat: -38.98333,
	long: 74.43333,
	isFound: false
},
{
	name: 'Waitohi Flat',
	lat: -44.21667,
	long: 71.18333,
	isFound: false
},
{
	name: 'Waitoa',
	lat: -37.61667,
	long: 75.63333,
	isFound: false
},
{
	name: 'Waitetuna',
	lat: -37.83333,
	long: 75.03333,
	isFound: false
},
{
	name: 'Waitewhenua',
	lat: -38.7,
	long: 74.96667,
	isFound: false
},
{
	name: 'Waiterimu',
	lat: -37.45,
	long: 75.3,
	isFound: false
},
{
	name: 'Waitepeka',
	lat: -46.28333,
	long: 69.66667,
	isFound: false
},
{
	name: 'Waitekauri',
	lat: -37.38333,
	long: 75.76667,
	isFound: false
},
{
	name: 'Waiteika',
	lat: -39.48333,
	long: 73.9,
	isFound: false
},
{
	name: 'Waitawa',
	lat: -44.3,
	long: 71.2,
	isFound: false
},
{
	name: 'Waitati',
	lat: -45.75,
	long: 70.56667,
	isFound: false
},
{
	name: 'Waitarere',
	lat: -40.55,
	long: 75.2,
	isFound: false
},
{
	name: 'Waitanguru',
	lat: -38.38333,
	long: 74.86667,
	isFound: false
},
{
	name: 'Waitangi',
	lat: -35.27025,
	long: 74.08062,
	isFound: false
},
{
	name: 'Waitane',
	lat: -46.18333,
	long: 68.7,
	isFound: false
},
{
	name: 'Waitaki',
	lat: -44.93333,
	long: 71.1,
	isFound: false
},
{
	name: 'Waitakere',
	lat: -36.85126,
	long: 74.54477,
	isFound: false
},
{
	name: 'Waitakaruru',
	lat: -37.25,
	long: 75.38333,
	isFound: false
},
{
	name: 'Waitakaro',
	lat: -37.93333,
	long: 78.26667,
	isFound: false
},
{
	name: 'Waitai',
	lat: -40.76667,
	long: 73.93333,
	isFound: false
},
{
	name: 'Waitahuna West',
	lat: -46.01667,
	long: 69.63333,
	isFound: false
},
{
	name: 'Waitahuna',
	lat: -45.98333,
	long: 69.76667,
	isFound: false
},
{
	name: 'Waitahinga',
	lat: -39.75,
	long: 74.95,
	isFound: false
},
{
	name: 'Waitahanui',
	lat: -38.78333,
	long: 76.08333,
	isFound: false
},
{
	name: 'Waitaanga',
	lat: -38.83333,
	long: 74.83333,
	isFound: false
},
{
	name: 'Wairunga',
	lat: -45.53333,
	long: 70.7,
	isFound: false
},
{
	name: 'Wairuna',
	lat: -46.16667,
	long: 69.33333,
	isFound: false
},
{
	name: 'Wairoto',
	lat: -45.98333,
	long: 67.6,
	isFound: false
},
{
	name: 'Wairio',
	lat: -46,
	long: 168.03333,
	isFound: false
},
{
	name: 'Wairere Falls',
	lat: -38.51667,
	long: 75.01667,
	isFound: false
},
{
	name: 'Wairau Valley',
	lat: -41.56667,
	long: 73.53333,
	isFound: false
},
{
	name: 'Wairata',
	lat: -38.3,
	long: 77.33333,
	isFound: false
},
{
	name: 'Wairangi',
	lat: -41.03333,
	long: 73.75,
	isFound: false
},
{
	name: 'Wairakei',
	lat: -38.63333,
	long: 76.1,
	isFound: false
},
{
	name: 'Waipuna',
	lat: -37.38333,
	long: 75.3,
	isFound: false
},
{
	name: 'Waipuku',
	lat: -39.26667,
	long: 74.26667,
	isFound: false
},
{
	name: 'Waipu Cove',
	lat: -36.03333,
	long: 74.51667,
	isFound: false
},
{
	name: 'Waipu',
	lat: -35.98333,
	long: 74.45,
	isFound: false
},
{
	name: 'Waipounamu',
	lat: -45.85,
	long: 68.76667,
	isFound: false
},
{
	name: 'Waipori Falls',
	lat: -45.91667,
	long: 69.98333,
	isFound: false
},
{
	name: 'Waipori',
	lat: -45.83333,
	long: 69.88333,
	isFound: false
},
{
	name: 'Waipiro',
	lat: -38.01667,
	long: 78.33333,
	isFound: false
},
{
	name: 'Waipipi',
	lat: -37.21667,
	long: 74.66667,
	isFound: false
},
{
	name: 'Waipiata',
	lat: -45.18333,
	long: 70.16667,
	isFound: false
},
{
	name: 'Waipatiki',
	lat: -40.37296,
	long: 76.28334,
	isFound: false
},
{
	name: 'Waiparera',
	lat: -35.7,
	long: 74.46667,
	isFound: false
},
{
	name: 'Waipara',
	lat: -43.06667,
	long: 72.75,
	isFound: false
},
{
	name: 'Waipapakauri',
	lat: -35.03333,
	long: 73.23333,
	isFound: false
},
{
	name: 'Waipapa',
	lat: -35.2,
	long: 73.91667,
	isFound: false
},
{
	name: 'Waipaoa',
	lat: -38.53333,
	long: 77.9,
	isFound: false
},
{
	name: 'Waipai',
	lat: -39.1,
	long: 76.61667,
	isFound: false
},
{
	name: 'Waipahi',
	lat: -46.11667,
	long: 69.25,
	isFound: false
},
{
	name: 'Waiouru',
	lat: -39.47753,
	long: 75.66834,
	isFound: false
},
{
	name: 'Waiotu',
	lat: -35.51667,
	long: 74.21667,
	isFound: false
},
{
	name: 'Waiotira',
	lat: -35.93333,
	long: 74.2,
	isFound: false
},
{
	name: 'Waiotemarama',
	lat: -35.55,
	long: 73.43333,
	isFound: false
},
{
	name: 'Waiotapu',
	lat: -38.35,
	long: 76.36667,
	isFound: false
},
{
	name: 'Waiotahi',
	lat: -38,
	long: 177.21667,
	isFound: false
},
{
	name: 'Waiongona',
	lat: -39.1,
	long: 74.21667,
	isFound: false
},
{
	name: 'Waione',
	lat: -40.46945,
	long: 76.27967,
	isFound: false
},
{
	name: 'Wainuiomata',
	lat: -41.26667,
	long: 74.95,
	isFound: false
},
{
	name: 'Wainui',
	lat: -43.81667,
	long: 72.9,
	isFound: false
},
{
	name: 'Wainui',
	lat: -38.68873,
	long: 78.07048,
	isFound: false
},
{
	name: 'Wainihinihi',
	lat: -42.76667,
	long: 71.33333,
	isFound: false
},
{
	name: 'Waimumu',
	lat: -46.11667,
	long: 68.8,
	isFound: false
},
{
	name: 'Waimiro',
	lat: -40.45,
	long: 76.23333,
	isFound: false
},
{
	name: 'Waimiha',
	lat: -38.61667,
	long: 75.31667,
	isFound: false
},
{
	name: 'Waimea West',
	lat: -41.33333,
	long: 73.1,
	isFound: false
},
{
	name: 'Waimaunga',
	lat: -42.23333,
	long: 71.7,
	isFound: false
},
{
	name: 'Waimauku',
	lat: -36.75,
	long: 74.5,
	isFound: false
},
{
	name: 'Waimatuku',
	lat: -46.3,
	long: 68.16667,
	isFound: false
},
{
	name: 'Waimatenui',
	lat: -35.61667,
	long: 73.71667,
	isFound: false
},
{
	name: 'Waimate North',
	lat: -35.31667,
	long: 73.88333,
	isFound: false
},
{
	name: 'Waimata',
	lat: -37.45,
	long: 75.86667,
	isFound: false
},
{
	name: 'Waimarie',
	lat: -41.52619,
	long: 71.93715,
	isFound: false
},
{
	name: 'Waimarama',
	lat: -39.8,
	long: 76.98333,
	isFound: false
},
{
	name: 'Waimangu',
	lat: -38.28404,
	long: 76.38262,
	isFound: false
},
{
	name: 'Waimangaroa',
	lat: -41.71667,
	long: 71.76667,
	isFound: false
},
{
	name: 'Waimana',
	lat: -38.15,
	long: 77.08333,
	isFound: false
},
{
	name: 'Waimamaku',
	lat: -35.55629,
	long: 73.47824,
	isFound: false
},
{
	name: 'Waimahaka',
	lat: -46.51667,
	long: 68.81667,
	isFound: false
},
{
	name: 'Waima',
	lat: -35.48333,
	long: 73.58333,
	isFound: false
},
{
	name: 'Waikuku Beach',
	lat: -43.28333,
	long: 72.71667,
	isFound: false
},
{
	name: 'Waikuku',
	lat: -43.3,
	long: 72.68333,
	isFound: false
},
{
	name: 'Waikowhai',
	lat: -43.45,
	long: 69.88333,
	isFound: false
},
{
	name: 'Waikopua',
	lat: -36.91667,
	long: 74.98333,
	isFound: false
},
{
	name: 'Waikokopu',
	lat: -39.07294,
	long: 77.82509,
	isFound: false
},
{
	name: 'Waikoikoi',
	lat: -46.01667,
	long: 69.15,
	isFound: false
},
{
	name: 'Waikohu',
	lat: -38.4,
	long: 77.78333,
	isFound: false
},
{
	name: 'Waikiwi',
	lat: -46.38333,
	long: 68.33333,
	isFound: false
},
{
	name: 'Waikino',
	lat: -37.41667,
	long: 75.76667,
	isFound: false
},
{
	name: 'Waikiekie',
	lat: -35.95,
	long: 74.23333,
	isFound: false
},
{
	name: 'Waikawau',
	lat: -38.46667,
	long: 74.66667,
	isFound: false
},
{
	name: 'Waikawa',
	lat: -41.26667,
	long: 74.05,
	isFound: false
},
{
	name: 'Waikarua',
	lat: -44.03333,
	long: 70.88333,
	isFound: false
},
{
	name: 'Waikari',
	lat: -42.96667,
	long: 72.68333,
	isFound: false
},
{
	name: 'Waikaremoana',
	lat: -38.8,
	long: 77.11667,
	isFound: false
},
{
	name: 'Waikare',
	lat: -35.33333,
	long: 74.25,
	isFound: false
},
{
	name: 'Waikanae',
	lat: -40.88333,
	long: 75.06667,
	isFound: false
},
{
	name: 'Waikakaho',
	lat: -41.43333,
	long: 73.9,
	isFound: false
},
{
	name: 'Waikaka',
	lat: -45.91667,
	long: 69.01667,
	isFound: false
},
{
	name: 'Waikaia',
	lat: -45.73333,
	long: 68.85,
	isFound: false
},
{
	name: 'Waihou',
	lat: -37.58333,
	long: 75.66667,
	isFound: false
},
{
	name: 'Waihopo',
	lat: -34.76667,
	long: 73.08333,
	isFound: false
},
{
	name: 'Waihopai',
	lat: -41.53333,
	long: 73.73333,
	isFound: false
},
{
	name: 'Waihola',
	lat: -46.03333,
	long: 70.1,
	isFound: false
},
{
	name: 'Waihoaka',
	lat: -46.23333,
	long: 67.7,
	isFound: false
},
{
	name: 'Waihi Beach',
	lat: -37.4,
	long: 75.93333,
	isFound: false
},
{
	name: 'Waihemo',
	lat: -45.3243,
	long: 70.56957,
	isFound: false
},
{
	name: 'Waihau Bay',
	lat: -37.61821,
	long: 77.90878,
	isFound: false
},
{
	name: 'Waiharera',
	lat: -34.93333,
	long: 73.21667,
	isFound: false
},
{
	name: 'Waihapai',
	lat: -39.65,
	long: 75.06667,
	isFound: false
},
{
	name: 'Waihaorunga',
	lat: -44.75,
	long: 70.81667,
	isFound: false
},
{
	name: 'Waihao Downs',
	lat: -44.8,
	long: 70.91667,
	isFound: false
},
{
	name: 'Waihao Forks',
	lat: -44.8,
	long: 70.93333,
	isFound: false
},
{
	name: 'Waihaha',
	lat: -35.33333,
	long: 74.23333,
	isFound: false
},
{
	name: 'Waiau Pa',
	lat: -37.13333,
	long: 74.75,
	isFound: false
},
{
	name: 'Waiau',
	lat: -42.65,
	long: 73.05,
	isFound: false
},
{
	name: 'Waiatoto',
	lat: -43.98333,
	long: 68.76667,
	isFound: false
},
{
	name: 'Waiatarua',
	lat: -36.93333,
	long: 74.58333,
	isFound: false
},
{
	name: 'Waiariari',
	lat: -44.68333,
	long: 71.08333,
	isFound: false
},
{
	name: 'Waiareka Junction',
	lat: -45.1,
	long: 70.93333,
	isFound: false
},
{
	name: 'Waianiwa',
	lat: -46.3,
	long: 68.26667,
	isFound: false
},
{
	name: 'Waianakarua',
	lat: -45.26667,
	long: 70.8,
	isFound: false
},
{
	name: 'Waharoa',
	lat: -37.76667,
	long: 75.76667,
	isFound: false
},
{
	name: 'Waerengaokuri',
	lat: -38.68333,
	long: 77.76667,
	isFound: false
},
{
	name: 'Waerengaahika',
	lat: -38.6,
	long: 77.93333,
	isFound: false
},
{
	name: 'Waerenga',
	lat: -37.36667,
	long: 75.23333,
	isFound: false
},
{
	name: 'Wadestown',
	lat: -41.26667,
	long: 74.76667,
	isFound: false
},
{
	name: 'Waddington',
	lat: -43.4,
	long: 72.03333,
	isFound: false
},
{
	name: 'Victoria Valley',
	lat: -35.15,
	long: 73.41667,
	isFound: false
},
{
	name: 'Venlaw',
	lat: -46.3,
	long: 69.03333,
	isFound: false
},
{
	name: 'Valetta',
	lat: -43.76667,
	long: 71.48333,
	isFound: false
},
{
	name: 'Uxbridge',
	lat: -44.91667,
	long: 70.88333,
	isFound: false
},
{
	name: 'Utuwai',
	lat: -40.01667,
	long: 75.93333,
	isFound: false
},
{
	name: 'Utiku',
	lat: -39.73343,
	long: 75.84378,
	isFound: false
},
{
	name: 'Utakura',
	lat: -35.35,
	long: 73.68333,
	isFound: false
},
{
	name: 'Uruwhenua',
	lat: -40.98333,
	long: 72.81667,
	isFound: false
},
{
	name: 'Uruti',
	lat: -38.95,
	long: 74.53333,
	isFound: false
},
{
	name: 'Ururua',
	lat: -46.08333,
	long: 69.7,
	isFound: false
},
{
	name: 'Urrall',
	lat: -43.71667,
	long: 71.75,
	isFound: false
},
{
	name: 'Urenui',
	lat: -39,
	long: 174.38333,
	isFound: false
},
{
	name: 'Upper Waiwera',
	lat: -36.55,
	long: 74.66667,
	isFound: false
},
{
	name: 'Upper Waiawa',
	lat: -38.05,
	long: 77.45,
	isFound: false
},
{
	name: 'Upper Takaka',
	lat: -41.03333,
	long: 72.83333,
	isFound: false
},
{
	name: 'Upper Shotover',
	lat: -44.83333,
	long: 68.71667,
	isFound: false
},
{
	name: 'Upper Ruatiti',
	lat: -39.2,
	long: 75.2,
	isFound: false
},
{
	name: 'Upper Rewanui',
	lat: -42.36667,
	long: 71.31667,
	isFound: false
},
{
	name: 'Upper Papamoa',
	lat: -37.76667,
	long: 76.25,
	isFound: false
},
{
	name: 'Upper Kahui',
	lat: -39.31667,
	long: 73.88333,
	isFound: false
},
{
	name: 'Upokopoito',
	lat: -39.75,
	long: 75.15,
	isFound: false
},
{
	name: 'Upokonui',
	lat: -39.78333,
	long: 75.21667,
	isFound: false
},
{
	name: 'Upokongaro',
	lat: -39.86667,
	long: 75.13333,
	isFound: false
},
{
	name: 'Upcot',
	lat: -41.9,
	long: 73.58333,
	isFound: false
},
{
	name: 'Umutoi',
	lat: -40,
	long: 175.96667,
	isFound: false
},
{
	name: 'Umukuri',
	lat: -41.08333,
	long: 72.96667,
	isFound: false
},
{
	name: 'Umawera',
	lat: -35.28333,
	long: 73.58333,
	isFound: false
},
{
	name: 'Tututawa',
	lat: -39.31667,
	long: 74.53333,
	isFound: false
},
{
	name: 'Tuturau',
	lat: -46.26667,
	long: 68.83333,
	isFound: false
},
{
	name: 'Tutukaka',
	lat: -35.6,
	long: 74.53333,
	isFound: false
},
{
	name: 'Tutira',
	lat: -39.2,
	long: 76.86667,
	isFound: false
},
{
	name: 'Tutekehua',
	lat: -35.26667,
	long: 73.51667,
	isFound: false
},
{
	name: 'Tutamoe',
	lat: -35.65,
	long: 73.65,
	isFound: false
},
{
	name: 'Tutaki',
	lat: -41.81667,
	long: 72.46667,
	isFound: false
},
{
	name: 'Tussock Creek',
	lat: -46.25,
	long: 68.41667,
	isFound: false
},
{
	name: 'Turua',
	lat: -37.23333,
	long: 75.56667,
	isFound: false
},
{
	name: 'Turiwhate',
	lat: -42.73333,
	long: 71.3,
	isFound: false
},
{
	name: 'Turiroa',
	lat: -39.01667,
	long: 77.41667,
	isFound: false
},
{
	name: 'Turiapua',
	lat: -35.76667,
	long: 74.45,
	isFound: false
},
{
	name: 'Turangi',
	lat: -38.99037,
	long: 75.80837,
	isFound: false
},
{
	name: 'Turakina South',
	lat: -40.05147,
	long: 75.21876,
	isFound: false
},
{
	name: 'Turakina',
	lat: -40.04703,
	long: 75.21472,
	isFound: false
},
{
	name: 'Tuparoa',
	lat: -37.91688,
	long: 78.38655,
	isFound: false
},
{
	name: 'Tuna',
	lat: -39.26795,
	long: 74.29814,
	isFound: false
},
{
	name: 'Tumahu',
	lat: -39.25,
	long: 73.91667,
	isFound: false
},
{
	name: 'Tui',
	lat: -41.53333,
	long: 72.73333,
	isFound: false
},
{
	name: 'Tuhua',
	lat: -38.75,
	long: 75.16667,
	isFound: false
},
{
	name: 'Tuhipa',
	lat: -35.4,
	long: 73.95,
	isFound: false
},
{
	name: 'Tuhara',
	lat: -39.03333,
	long: 77.51667,
	isFound: false
},
{
	name: 'Tuatara',
	lat: -46.25,
	long: 69.86667,
	isFound: false
},
{
	name: 'Tuatapere',
	lat: -46.13333,
	long: 67.68333,
	isFound: false
},
{
	name: 'Tuapeka West',
	lat: -45.93623,
	long: 69.55149,
	isFound: false
},
{
	name: 'Tuapeka Mouth',
	lat: -46.01667,
	long: 69.51667,
	isFound: false
},
{
	name: 'Tuamarina',
	lat: -41.43333,
	long: 73.95,
	isFound: false
},
{
	name: 'Tuakau',
	lat: -37.27047,
	long: 74.94384,
	isFound: false
},
{
	name: 'Tuai',
	lat: -38.81667,
	long: 77.16667,
	isFound: false
},
{
	name: 'Tuahiwi',
	lat: -43.33333,
	long: 72.65,
	isFound: false
},
{
	name: 'Tryphena',
	lat: -36.30143,
	long: 75.48934,
	isFound: false
},
{
	name: 'Trentham',
	lat: -41.13333,
	long: 75.03333,
	isFound: false
},
{
	name: 'Traquair',
	lat: -45.81667,
	long: 70.15,
	isFound: false
},
{
	name: 'Towai',
	lat: -35.48333,
	long: 74.13333,
	isFound: false
},
{
	name: 'Totara North',
	lat: -35.03333,
	long: 73.71667,
	isFound: false
},
{
	name: 'Totara Flat',
	lat: -42.3,
	long: 71.61667,
	isFound: false
},
{
	name: 'Totara',
	lat: -45.13333,
	long: 70.86667,
	isFound: false
},
{
	name: 'Tormore',
	lat: -42.9,
	long: 73.13333,
	isFound: false
},
{
	name: 'Torere',
	lat: -37.95,
	long: 77.5,
	isFound: false
},
{
	name: 'Torehape',
	lat: -37.35,
	long: 75.41667,
	isFound: false
},
{
	name: 'Torbay',
	lat: -36.69595,
	long: 74.75124,
	isFound: false
},
{
	name: 'Topuni',
	lat: -36.21667,
	long: 74.46667,
	isFound: false
},
{
	name: 'Tongariro',
	lat: -39.03333,
	long: 75.65,
	isFound: false
},
{
	name: 'Tongaporutu',
	lat: -38.8,
	long: 74.6,
	isFound: false
},
{
	name: 'Tomoana',
	lat: -39.63333,
	long: 76.86667,
	isFound: false
},
{
	name: 'Tolaga Bay',
	lat: -38.36667,
	long: 78.3,
	isFound: false
},
{
	name: 'Tokoroa',
	lat: -38.23333,
	long: 75.86667,
	isFound: false
},
{
	name: 'Tokomaru',
	lat: -40.473,
	long: 75.50934,
	isFound: false
},
{
	name: 'Tokomaru',
	lat: -38.13333,
	long: 78.3,
	isFound: false
},
{
	name: 'Tokoiti',
	lat: -46.13333,
	long: 170,
	isFound: false
},
{
	name: 'Toko',
	lat: -39.33333,
	long: 74.4,
	isFound: false
},
{
	name: 'Tokirima',
	lat: -38.93333,
	long: 75.01667,
	isFound: false
},
{
	name: 'Tokatoka',
	lat: -36.05,
	long: 73.96667,
	isFound: false
},
{
	name: 'Tokarahi',
	lat: -44.95,
	long: 70.65,
	isFound: false
},
{
	name: 'Tokanui',
	lat: -46.56667,
	long: 68.93333,
	isFound: false
},
{
	name: 'Tokaanu',
	lat: -38.96667,
	long: 75.76667,
	isFound: false
},
{
	name: 'Toiro',
	lat: -46.26667,
	long: 69.65,
	isFound: false
},
{
	name: 'Toatoa',
	lat: -38.13333,
	long: 77.5,
	isFound: false
},
{
	name: 'Toa',
	lat: -46.4,
	long: 68.51667,
	isFound: false
},
{
	name: 'Titoki',
	lat: -35.73333,
	long: 74.05,
	isFound: false
},
{
	name: 'Titiroa',
	lat: -46.48333,
	long: 68.76667,
	isFound: false
},
{
	name: 'Titirangi North',
	lat: -36.92519,
	long: 74.66279,
	isFound: false
},
{
	name: 'Titahi Bay',
	lat: -41.1,
	long: 74.83333,
	isFound: false
},
{
	name: 'Tisbury',
	lat: -46.45,
	long: 68.4,
	isFound: false
},
{
	name: 'Tiroroa',
	lat: -41.83333,
	long: 71.75,
	isFound: false
},
{
	name: 'Tiromoana',
	lat: -42.03333,
	long: 71.38333,
	isFound: false
},
{
	name: 'Tiromaunga',
	lat: -45.85,
	long: 68.15,
	isFound: false
},
{
	name: 'Tirohia',
	lat: -37.43333,
	long: 75.65,
	isFound: false
},
{
	name: 'Tiraumea',
	lat: -40.63333,
	long: 76.04557,
	isFound: false
},
{
	name: 'Tirau',
	lat: -37.98333,
	long: 75.75,
	isFound: false
},
{
	name: 'Tinwald',
	lat: -43.91667,
	long: 71.71667,
	isFound: false
},
{
	name: 'Tinui',
	lat: -40.88333,
	long: 76.06667,
	isFound: false
},
{
	name: 'Tinopai',
	lat: -36.25441,
	long: 74.24608,
	isFound: false
},
{
	name: 'Tinline',
	lat: -41.26667,
	long: 73.5,
	isFound: false
},
{
	name: 'Tiniroto',
	lat: -38.76667,
	long: 77.56667,
	isFound: false
},
{
	name: 'Timaru',
	lat: -44.39672,
	long: 71.25364,
	isFound: false
},
{
	name: 'Tikorangi',
	lat: -39.03333,
	long: 74.28333,
	isFound: false
},
{
	name: 'Tikokino',
	lat: -39.81667,
	long: 76.45,
	isFound: false
},
{
	name: 'Tikitere',
	lat: -38.06667,
	long: 76.36667,
	isFound: false
},
{
	name: 'Tikinui',
	lat: -36.13333,
	long: 73.96667,
	isFound: false
},
{
	name: 'Tihaka',
	lat: -46.35439,
	long: 67.93246,
	isFound: false
},
{
	name: 'Tiakitahuna',
	lat: -40.4,
	long: 75.5,
	isFound: false
},
{
	name: 'Ti Tree Point',
	lat: -40.43699,
	long: 76.40541,
	isFound: false
},
{
	name: 'Thorpe',
	lat: -41.28333,
	long: 72.86667,
	isFound: false
},
{
	name: 'Thornton',
	lat: -37.91667,
	long: 76.86667,
	isFound: false
},
{
	name: 'Thornbury',
	lat: -46.28333,
	long: 68.1,
	isFound: false
},
{
	name: 'The Reefs',
	lat: -45.63333,
	long: 70.25,
	isFound: false
},
{
	name: 'The Key',
	lat: -45.55,
	long: 67.9,
	isFound: false
},
{
	name: 'Te Whetu',
	lat: -38.16667,
	long: 75.95,
	isFound: false
},
{
	name: 'Te Whanga',
	lat: -36.6,
	long: 74.83333,
	isFound: false
},
{
	name: 'Te Whaiti',
	lat: -38.58333,
	long: 76.78333,
	isFound: false
},
{
	name: 'Te Wera',
	lat: -39.239,
	long: 74.58404,
	isFound: false
},
{
	name: 'Te Weka',
	lat: -41.25,
	long: 74.2,
	isFound: false
},
{
	name: 'Te Waotu',
	lat: -38.15,
	long: 75.7,
	isFound: false
},
{
	name: 'Te Waitere',
	lat: -38.13776,
	long: 74.82205,
	isFound: false
},
{
	name: 'Te Waewae',
	lat: -46.2,
	long: 67.66667,
	isFound: false
},
{
	name: 'Te Uku',
	lat: -37.83333,
	long: 74.96667,
	isFound: false
},
{
	name: 'Te Tua',
	lat: -46.16667,
	long: 67.68333,
	isFound: false
},
{
	name: 'Te Tawa',
	lat: -39.18333,
	long: 74.21667,
	isFound: false
},
{
	name: 'Te Taho',
	lat: -43.21667,
	long: 70.43333,
	isFound: false
},
{
	name: 'Te Rou',
	lat: -41.56667,
	long: 73.46667,
	isFound: false
},
{
	name: 'Te Roti',
	lat: -39.48333,
	long: 74.26667,
	isFound: false
},
{
	name: 'Te Rerenga',
	lat: -36.75,
	long: 75.6,
	isFound: false
},
{
	name: 'Te Rehunga',
	lat: -40.22011,
	long: 76.01293,
	isFound: false
},
{
	name: 'Te Rawa',
	lat: -41.06667,
	long: 73.9,
	isFound: false
},
{
	name: 'Te Rauamoa',
	lat: -38.08333,
	long: 75.05,
	isFound: false
},
{
	name: 'Te Rapa',
	lat: -37.75,
	long: 75.21667,
	isFound: false
},
{
	name: 'Te Ranga',
	lat: -39.3,
	long: 75.2,
	isFound: false
},
{
	name: 'Te Puninga',
	lat: -37.58333,
	long: 75.56667,
	isFound: false
},
{
	name: 'Te Puna',
	lat: -37.69543,
	long: 76.07213,
	isFound: false
},
{
	name: 'Te Puia',
	lat: -38.06667,
	long: 78.3,
	isFound: false
},
{
	name: 'Te Pu',
	lat: -37.98688,
	long: 76.18957,
	isFound: false
},
{
	name: 'Te Popo',
	lat: -39.26667,
	long: 74.36667,
	isFound: false
},
{
	name: 'Te Poi',
	lat: -37.88333,
	long: 75.83333,
	isFound: false
},
{
	name: 'Te Pohue',
	lat: -39.25,
	long: 76.68333,
	isFound: false
},
{
	name: 'Te Pirita',
	lat: -43.66667,
	long: 71.95,
	isFound: false
},
{
	name: 'Tepene',
	lat: -35.06667,
	long: 73.91667,
	isFound: false
},
{
	name: 'Te Papatapu',
	lat: -37.95,
	long: 74.88333,
	isFound: false
},
{
	name: 'Te Pangu',
	lat: -41.25,
	long: 74.23333,
	isFound: false
},
{
	name: 'Te Paki',
	lat: -34.50435,
	long: 72.79908,
	isFound: false
},
{
	name: 'Te Namu',
	lat: -41.38333,
	long: 72.08333,
	isFound: false
},
{
	name: 'Templeton',
	lat: -43.55,
	long: 72.46667,
	isFound: false
},
{
	name: 'Te Moana',
	lat: -44.06667,
	long: 71.13333,
	isFound: false
},
{
	name: 'Te Miro',
	lat: -37.81667,
	long: 75.55,
	isFound: false
},
{
	name: 'Te Mawhai',
	lat: -38.05,
	long: 75.3,
	isFound: false
},
{
	name: 'Te Mata',
	lat: -37.88333,
	long: 74.86667,
	isFound: false
},
{
	name: 'Te Mapara',
	lat: -38.45,
	long: 75.08333,
	isFound: false
},
{
	name: 'Te Maika',
	lat: -38.08333,
	long: 74.78333,
	isFound: false
},
{
	name: 'Te Kuha',
	lat: -41.83333,
	long: 71.65,
	isFound: false
},
{
	name: 'Te Kowhai',
	lat: -37.75,
	long: 75.15,
	isFound: false
},
{
	name: 'Te Koroa',
	lat: -35.11667,
	long: 73.55,
	isFound: false
},
{
	name: 'Te Kopura',
	lat: -36.03333,
	long: 73.93333,
	isFound: false
},
{
	name: 'Te Kohanga',
	lat: -37.31413,
	long: 74.84514,
	isFound: false
},
{
	name: 'Te Kiri',
	lat: -39.43333,
	long: 74.03333,
	isFound: false
},
{
	name: 'Te Kinga',
	lat: -42.63333,
	long: 71.5,
	isFound: false
},
{
	name: 'Te Kawa',
	lat: -38.1,
	long: 75.28333,
	isFound: false
},
{
	name: 'Te Kauwhata',
	lat: -37.4,
	long: 75.15,
	isFound: false
},
{
	name: 'Te Karaka',
	lat: -38.46667,
	long: 77.86667,
	isFound: false
},
{
	name: 'Te Kao',
	lat: -34.65,
	long: 72.95,
	isFound: false
},
{
	name: 'Te Kaha',
	lat: -37.73987,
	long: 77.67656,
	isFound: false
},
{
	name: 'Te Huia',
	lat: -39.73333,
	long: 74.76667,
	isFound: false
},
{
	name: 'Te Horo',
	lat: -40.8,
	long: 75.1,
	isFound: false
},
{
	name: 'Te Hoe',
	lat: -37.51667,
	long: 75.31667,
	isFound: false
},
{
	name: 'Te Hauke',
	lat: -39.76667,
	long: 76.68333,
	isFound: false
},
{
	name: 'Te Haroto',
	lat: -39.13333,
	long: 76.6,
	isFound: false
},
{
	name: 'Te Hapua',
	lat: -34.5,
	long: 72.91667,
	isFound: false
},
{
	name: 'Te Hana',
	lat: -36.26667,
	long: 74.51667,
	isFound: false
},
{
	name: 'Teddington',
	lat: -43.66831,
	long: 72.66152,
	isFound: false
},
{
	name: 'Te Awanga',
	lat: -39.63333,
	long: 76.98333,
	isFound: false
},
{
	name: 'Te Awaiti',
	lat: -41.21667,
	long: 74.28333,
	isFound: false
},
{
	name: 'Te Atatu',
	lat: -36.83333,
	long: 74.65,
	isFound: false
},
{
	name: 'Te Aroha West',
	lat: -37.58333,
	long: 75.73333,
	isFound: false
},
{
	name: 'Te Araroa',
	lat: -37.63333,
	long: 78.36667,
	isFound: false
},
{
	name: 'Te Arai',
	lat: -36.16667,
	long: 74.61667,
	isFound: false
},
{
	name: 'Te Anga',
	lat: -38.25567,
	long: 74.83587,
	isFound: false
},
{
	name: 'Te Anau',
	lat: -45.41667,
	long: 67.71667,
	isFound: false
},
{
	name: 'Te Akau',
	lat: -37.68333,
	long: 74.86667,
	isFound: false
},
{
	name: 'Te Akatea',
	lat: -37.65,
	long: 75.06667,
	isFound: false
},
{
	name: 'Te Ahuahu',
	lat: -35.33333,
	long: 73.85,
	isFound: false
},
{
	name: 'Taylorville',
	lat: -42.43333,
	long: 71.31667,
	isFound: false
},
{
	name: 'Tawiti',
	lat: -36.18333,
	long: 74.35,
	isFound: false
},
{
	name: 'Tawhiwhi',
	lat: -39.63333,
	long: 74.8,
	isFound: false
},
{
	name: 'Tawhiti',
	lat: -45.38333,
	long: 69.28333,
	isFound: false
},
{
	name: 'Tawharanui',
	lat: -36.38333,
	long: 74.8,
	isFound: false
},
{
	name: 'Tawhai',
	lat: -42.15,
	long: 71.8,
	isFound: false
},
{
	name: 'Tawanui',
	lat: -46.46667,
	long: 69.53333,
	isFound: false
},
{
	name: 'Tawai',
	lat: -44.88333,
	long: 70.98333,
	isFound: false
},
{
	name: 'Tauwhare',
	lat: -37.76667,
	long: 75.46667,
	isFound: false
},
{
	name: 'Tauweru ',
	lat: -40.96667,
	long: 75.8,
	isFound: false
},
{
	name: 'Tautuku',
	lat: -46.58333,
	long: 69.41667,
	isFound: false
},
{
	name: 'Tautoro',
	lat: -35.46667,
	long: 73.83333,
	isFound: false
},
{
	name: 'Taurikura',
	lat: -35.8217,
	long: 74.52919,
	isFound: false
},
{
	name: 'Tauraroa',
	lat: -35.86667,
	long: 74.23333,
	isFound: false
},
{
	name: 'Taupo',
	lat: -38.68333,
	long: 76.08333,
	isFound: false
},
{
	name: 'Taupiri',
	lat: -37.61667,
	long: 75.18333,
	isFound: false
},
{
	name: 'Taupaki',
	lat: -36.81667,
	long: 74.56667,
	isFound: false
},
{
	name: 'Taumutu',
	lat: -43.85,
	long: 72.36667,
	isFound: false
},
{
	name: 'Taumatatahi',
	lat: -39.55,
	long: 74.8,
	isFound: false
},
{
	name: 'Taumata',
	lat: -46.15,
	long: 69.46667,
	isFound: false
},
{
	name: 'Taumarere',
	lat: -35.36667,
	long: 74.08333,
	isFound: false
},
{
	name: 'Taumangi',
	lat: -38.03333,
	long: 75.76667,
	isFound: false
},
{
	name: 'Tauhoa',
	lat: -36.38333,
	long: 74.45,
	isFound: false
},
{
	name: 'Tatuanui',
	lat: -37.61667,
	long: 75.6,
	isFound: false
},
{
	name: 'Tatu',
	lat: -38.9,
	long: 74.95,
	isFound: false
},
{
	name: 'Tatare',
	lat: -43.36667,
	long: 70.18333,
	isFound: false
},
{
	name: 'Tataramoa',
	lat: -40.1345,
	long: 76.14788,
	isFound: false
},
{
	name: 'Tataraimaka',
	lat: -39.16667,
	long: 73.91667,
	isFound: false
},
{
	name: 'Tarurutangi',
	lat: -39.08333,
	long: 74.18333,
	isFound: false
},
{
	name: 'Tarukenga',
	lat: -38.07516,
	long: 76.15805,
	isFound: false
},
{
	name: 'Tarras',
	lat: -44.83333,
	long: 69.41667,
	isFound: false
},
{
	name: 'Taringamotu',
	lat: -38.83333,
	long: 75.25,
	isFound: false
},
{
	name: 'Tariki',
	lat: -39.23333,
	long: 74.25,
	isFound: false
},
{
	name: 'Tarewa',
	lat: -38.93333,
	long: 77.8,
	isFound: false
},
{
	name: 'Tarawera',
	lat: -39.03333,
	long: 76.58333,
	isFound: false
},
{
	name: 'Taraunui',
	lat: -35.73333,
	long: 74.46667,
	isFound: false
},
{
	name: 'Tarata',
	lat: -39.15,
	long: 74.36667,
	isFound: false
},
{
	name: 'Tarara',
	lat: -46.51667,
	long: 69.56667,
	isFound: false
},
{
	name: 'Taramakau',
	lat: -42.68333,
	long: 71.25,
	isFound: false
},
{
	name: 'Tarakohe',
	lat: -40.81667,
	long: 72.9,
	isFound: false
},
{
	name: 'Tapuwae',
	lat: -38.56667,
	long: 75.33333,
	isFound: false
},
{
	name: 'Tapuhi',
	lat: -35.46667,
	long: 74.2,
	isFound: false
},
{
	name: 'Tapu',
	lat: -36.98333,
	long: 75.5,
	isFound: false
},
{
	name: 'Tapawera',
	lat: -41.4,
	long: 72.81667,
	isFound: false
},
{
	name: 'Taniwha',
	lat: -37.4,
	long: 75.3,
	isFound: false
},
{
	name: 'Tangowahine',
	lat: -35.86667,
	long: 73.93333,
	isFound: false
},
{
	name: 'Tangoio',
	lat: -39.33333,
	long: 76.91667,
	isFound: false
},
{
	name: 'Tangiwai',
	lat: -39.46667,
	long: 75.58333,
	isFound: false
},
{
	name: 'Tangitu',
	lat: -38.61667,
	long: 75.21667,
	isFound: false
},
{
	name: 'Tangiteroria',
	lat: -35.81667,
	long: 74.05,
	isFound: false
},
{
	name: 'Tangimoana',
	lat: -40.3,
	long: 75.25,
	isFound: false
},
{
	name: 'Tangarakau',
	lat: -39.01822,
	long: 74.856,
	isFound: false
},
{
	name: 'Tangaihe',
	lat: -36.16667,
	long: 74.01667,
	isFound: false
},
{
	name: 'Tanekaha',
	lat: -35.58333,
	long: 74.23333,
	isFound: false
},
{
	name: 'Taneatua',
	lat: -38.06667,
	long: 77.01667,
	isFound: false
},
{
	name: 'Tane',
	lat: -40.57579,
	long: 75.84781,
	isFound: false
},
{
	name: 'Tamahere',
	lat: -37.83333,
	long: 75.35,
	isFound: false
},
{
	name: 'Takutai',
	lat: -42.73333,
	long: 70.95,
	isFound: false
},
{
	name: 'Takou',
	lat: -39.43333,
	long: 74.63333,
	isFound: false
},
{
	name: 'Takapau',
	lat: -40.03333,
	long: 76.35,
	isFound: false
},
{
	name: 'Takamatua Bay',
	lat: -43.78333,
	long: 72.96667,
	isFound: false
},
{
	name: 'Takaka',
	lat: -40.85,
	long: 72.8,
	isFound: false
},
{
	name: 'Takahue',
	lat: -35.2,
	long: 73.35,
	isFound: false
},
{
	name: 'Takahiwai',
	lat: -35.83333,
	long: 74.41667,
	isFound: false
},
{
	name: 'Taitimu',
	lat: -37.05,
	long: 74.66667,
	isFound: false
},
{
	name: 'Tai Tapu',
	lat: -43.66667,
	long: 72.55,
	isFound: false
},
{
	name: 'Taita',
	lat: -41.2,
	long: 74.95,
	isFound: false
},
{
	name: 'Tairua',
	lat: -37.01667,
	long: 75.85,
	isFound: false
},
{
	name: 'Taipa',
	lat: -34.99604,
	long: 73.46665,
	isFound: false
},
{
	name: 'Taioma',
	lat: -45.8,
	long: 70.31667,
	isFound: false
},
{
	name: 'Tainui',
	lat: -42.76667,
	long: 70.91667,
	isFound: false
},
{
	name: 'Taimate',
	lat: -41.78333,
	long: 74.15,
	isFound: false
},
{
	name: 'Taikawhana',
	lat: -35.23333,
	long: 73.53333,
	isFound: false
},
{
	name: 'Taieri Mouth',
	lat: -46.06667,
	long: 70.18333,
	isFound: false
},
{
	name: 'Taieri Beach',
	lat: -46.08333,
	long: 70.18333,
	isFound: false
},
{
	name: 'Tahunanui',
	lat: -41.28706,
	long: 73.24573,
	isFound: false
},
{
	name: 'Tahuna',
	lat: -37.5,
	long: 75.48333,
	isFound: false
},
{
	name: 'Tahoraiti',
	lat: -40.23348,
	long: 76.05968,
	isFound: false
},
{
	name: 'Tahora',
	lat: -39.03095,
	long: 74.80257,
	isFound: false
},
{
	name: 'Tahere',
	lat: -35.68333,
	long: 74.43333,
	isFound: false
},
{
	name: 'Tahekeroa',
	lat: -36.53333,
	long: 74.55,
	isFound: false
},
{
	name: 'Tahawai',
	lat: -37.51667,
	long: 75.93333,
	isFound: false
},
{
	name: 'Tahatika',
	lat: -46.41667,
	long: 69.55,
	isFound: false
},
{
	name: 'Taheke',
	lat: -35.45,
	long: 73.65,
	isFound: false
},
{
	name: 'Tahakopa',
	lat: -46.51667,
	long: 69.38333,
	isFound: false
},
{
	name: 'Taemaro',
	lat: -34.95,
	long: 73.56667,
	isFound: false
},
{
	name: 'Tadmor',
	lat: -41.43333,
	long: 72.75,
	isFound: false
},
{
	name: 'Swanson',
	lat: -36.86667,
	long: 74.58333,
	isFound: false
},
{
	name: 'Swannanoa',
	lat: -43.38333,
	long: 72.46667,
	isFound: false
},
{
	name: 'Sutton',
	lat: -45.56667,
	long: 70.11667,
	isFound: false
},
{
	name: 'Sutherlands',
	lat: -44.28333,
	long: 71.05,
	isFound: false
},
{
	name: 'Surfdale',
	lat: -36.79114,
	long: 75.02568,
	isFound: false
},
{
	name: 'Summer',
	lat: -43.57703,
	long: 72.75984,
	isFound: false
},
{
	name: 'Summit',
	lat: -41.15,
	long: 75.2,
	isFound: false
},
{
	name: 'Studholme Junction',
	lat: -44.73333,
	long: 71.13333,
	isFound: false
},
{
	name: 'Stuarts',
	lat: -46.53333,
	long: 69.45,
	isFound: false
},
{
	name: 'Straun',
	lat: -44.58333,
	long: 70.65,
	isFound: false
},
{
	name: 'Strathmore',
	lat: -39.28333,
	long: 74.56667,
	isFound: false
},
{
	name: 'Strachans',
	lat: -44.77891,
	long: 70.517,
	isFound: false
},
{
	name: 'Stoneburn',
	lat: -45.43333,
	long: 70.56667,
	isFound: false
},
{
	name: 'Stoke',
	lat: -43.31667,
	long: 72.46667,
	isFound: false
},
{
	name: 'Stoke',
	lat: -41.31667,
	long: 73.23333,
	isFound: false
},
{
	name: 'Stockton',
	lat: -41.63333,
	long: 71.88333,
	isFound: false
},
{
	name: 'Stirling',
	lat: -46.25,
	long: 69.78333,
	isFound: false
},
{
	name: 'Stillwater',
	lat: -42.43333,
	long: 71.35,
	isFound: false
},
{
	name: 'Staveley',
	lat: -43.65,
	long: 71.43333,
	isFound: false
},
{
	name: 'Stanley Brook',
	lat: -41.33333,
	long: 72.81667,
	isFound: false
},
{
	name: 'Stafford',
	lat: -42.66667,
	long: 71.08333,
	isFound: false
},
{
	name: 'Springston South',
	lat: -43.68333,
	long: 72.43333,
	isFound: false
},
{
	name: 'Springston',
	lat: -43.65,
	long: 72.41667,
	isFound: false
},
{
	name: 'Springs Junction',
	lat: -42.31667,
	long: 72.18333,
	isFound: false
},
{
	name: 'Springhills',
	lat: -46.18333,
	long: 68.48333,
	isFound: false
},
{
	name: 'Spring Grove',
	lat: -41.38333,
	long: 73.08333,
	isFound: false
},
{
	name: 'Springfield',
	lat: -43.33333,
	long: 71.91667,
	isFound: false
},
{
	name: 'Spring Creek',
	lat: -41.46667,
	long: 73.96667,
	isFound: false
},
{
	name: 'Springburn',
	lat: -43.66667,
	long: 71.46667,
	isFound: false
},
{
	name: 'Springbank',
	lat: -43.31667,
	long: 72.43333,
	isFound: false
},
{
	name: 'Spreydon',
	lat: -43.5567,
	long: 72.61689,
	isFound: false
},
{
	name: 'Spotswood',
	lat: -42.75,
	long: 73.26667,
	isFound: false
},
{
	name: 'South Malvern',
	lat: -43.46667,
	long: 71.9,
	isFound: false
},
{
	name: 'South Hillend',
	lat: -46.05,
	long: 68.25,
	isFound: false
},
{
	name: 'Southburn',
	lat: -44.45,
	long: 71.1,
	isFound: false
},
{
	name: 'Southbrook',
	lat: -43.33333,
	long: 72.6,
	isFound: false
},
{
	name: 'Southbridge',
	lat: -43.81667,
	long: 72.25,
	isFound: false
},
{
	name: 'Somerton',
	lat: -43.75,
	long: 71.91667,
	isFound: false
},
{
	name: 'Slope Point',
	lat: -46.66667,
	long: 169,
	isFound: false
},
{
	name: 'Skippers',
	lat: -44.83333,
	long: 68.68333,
	isFound: false
},
{
	name: 'Simons Pass',
	lat: -44.2,
	long: 70.28333,
	isFound: false
},
{
	name: 'Silverhope',
	lat: -39.96587,
	long: 75.52835,
	isFound: false
},
{
	name: 'Silverdale',
	lat: -36.6187,
	long: 74.67764,
	isFound: false
},
{
	name: 'Sherwood Downs',
	lat: -43.96667,
	long: 70.86667,
	isFound: false
},
{
	name: 'Sherwood',
	lat: -43.75,
	long: 71.81667,
	isFound: false
},
{
	name: 'Sherry River',
	lat: -41.43333,
	long: 72.73333,
	isFound: false
},
{
	name: 'Shenandoah',
	lat: -41.86667,
	long: 72.25,
	isFound: false
},
{
	name: 'Sheffield',
	lat: -43.38333,
	long: 72.01667,
	isFound: false
},
{
	name: 'Shag Point',
	lat: -45.46667,
	long: 70.81667,
	isFound: false
},
{
	name: 'Sergeants Hill',
	lat: -41.76667,
	long: 71.65,
	isFound: false
},
{
	name: 'Sentry Hill',
	lat: -39.03333,
	long: 74.2,
	isFound: false
},
{
	name: 'Selwyn',
	lat: -43.65,
	long: 72.21667,
	isFound: false
},
{
	name: 'Sefton',
	lat: -43.25,
	long: 72.66667,
	isFound: false
},
{
	name: 'Sedgemere',
	lat: -43.85,
	long: 72.33333,
	isFound: false
},
{
	name: 'Seddonville',
	lat: -41.55,
	long: 71.98333,
	isFound: false
},
{
	name: 'Seddon',
	lat: -41.66667,
	long: 74.08333,
	isFound: false
},
{
	name: 'Seaward Downs',
	lat: -46.38333,
	long: 68.75,
	isFound: false
},
{
	name: 'Seafield',
	lat: -43.91667,
	long: 71.9,
	isFound: false
},
{
	name: 'Seadown',
	lat: -44.3,
	long: 71.26667,
	isFound: false
},
{
	name: 'Seacliff',
	lat: -45.68333,
	long: 70.61667,
	isFound: false
},
{
	name: 'Scotts Gap',
	lat: -46.06667,
	long: 67.93333,
	isFound: false
},
{
	name: 'Scargill',
	lat: -42.93333,
	long: 72.95,
	isFound: false
},
{
	name: 'Sawyers Bay',
	lat: -45.83333,
	long: 70.6,
	isFound: false
},
{
	name: 'Sanson',
	lat: -40.22011,
	long: 75.42445,
	isFound: false
},
{
	name: 'Sandy Knolls',
	lat: -43.56667,
	long: 72.31667,
	isFound: false
},
{
	name: 'Sandy Bay',
	lat: -41.01667,
	long: 72.98333,
	isFound: false
},
{
	name: 'Salisbury',
	lat: -44.43333,
	long: 71.2,
	isFound: false
},
{
	name: 'Saint Patricks',
	lat: -45.8,
	long: 68.5,
	isFound: false
},
{
	name: 'Saint Omer',
	lat: -41.18333,
	long: 73.96667,
	isFound: false
},
{
	name: 'Saint Clair',
	lat: -45.91667,
	long: 70.48333,
	isFound: false
},
{
	name: 'Saint Bathans',
	lat: -44.86667,
	long: 69.81667,
	isFound: false
},
{
	name: 'Saint Arnaud',
	lat: -41.8,
	long: 72.83333,
	isFound: false
},
{
	name: 'Saint Andrews',
	lat: -44.53333,
	long: 71.18333,
	isFound: false
},
{
	name: 'Saies',
	lat: -35.05,
	long: 73.7,
	isFound: false
},
{
	name: 'Ryal Bush',
	lat: -46.26667,
	long: 68.33333,
	isFound: false
},
{
	name: 'Rutherglen',
	lat: -42.53164,
	long: 71.17304,
	isFound: false
},
{
	name: 'Russell',
	lat: -35.26153,
	long: 74.12257,
	isFound: false
},
{
	name: 'Ruru',
	lat: -42.58333,
	long: 71.5,
	isFound: false
},
{
	name: 'Runciman',
	lat: -37.1,
	long: 74.93333,
	isFound: false
},
{
	name: 'Runaruna',
	lat: -35.31667,
	long: 73.35,
	isFound: false
},
{
	name: 'Rukuwai',
	lat: -35.75,
	long: 74.46667,
	isFound: false
},
{
	name: 'Rukuhia',
	lat: -37.86667,
	long: 75.28333,
	isFound: false
},
{
	name: 'Ruawaro',
	lat: -37.51667,
	long: 75.05,
	isFound: false
},
{
	name: 'Ruawai',
	lat: -36.13333,
	long: 74.03333,
	isFound: false
},
{
	name: 'Ruatoria',
	lat: -37.88333,
	long: 78.33333,
	isFound: false
},
{
	name: 'Ruatoki North',
	lat: -38.13333,
	long: 77.05,
	isFound: false
},
{
	name: 'Ruatapu',
	lat: -42.80233,
	long: 70.88916,
	isFound: false
},
{
	name: 'Ruataniwha',
	lat: -39.93333,
	long: 76.5,
	isFound: false
},
{
	name: 'Ruatangata West',
	lat: -35.65,
	long: 74.18333,
	isFound: false
},
{
	name: 'Ruatangata East',
	lat: -35.65,
	long: 74.23333,
	isFound: false
},
{
	name: 'Ruatahuna',
	lat: -38.61379,
	long: 76.95919,
	isFound: false
},
{
	name: 'Ruapuna',
	lat: -43.86667,
	long: 71.35,
	isFound: false
},
{
	name: 'Ruapuke',
	lat: -37.9247,
	long: 74.81377,
	isFound: false
},
{
	name: 'Ruakaka',
	lat: -35.88333,
	long: 74.4,
	isFound: false
},
{
	name: 'Ruahine',
	lat: -46.35,
	long: 67.8,
	isFound: false
},
{
	name: 'Ruahine',
	lat: -39.83333,
	long: 75.9,
	isFound: false
},
{
	name: 'Rowsells',
	lat: -36.1,
	long: 74.35,
	isFound: false
},
{
	name: 'Rowan',
	lat: -39.39739,
	long: 74.11114,
	isFound: false
},
{
	name: 'Round Hill',
	lat: -46.31667,
	long: 67.81667,
	isFound: false
},
{
	name: 'Rotu',
	lat: -35.88333,
	long: 73.8,
	isFound: false
},
{
	name: 'Rotowaro',
	lat: -37.6,
	long: 75.08333,
	isFound: false
},
{
	name: 'Rotongaro',
	lat: -37.51667,
	long: 75.08333,
	isFound: false
},
{
	name: 'Rotomanu',
	lat: -42.65,
	long: 71.53333,
	isFound: false
},
{
	name: 'Rotokohu',
	lat: -41.96667,
	long: 71.9,
	isFound: false
},
{
	name: 'Rotokino',
	lat: -43.2,
	long: 70.36667,
	isFound: false
},
{
	name: 'Rotokawa',
	lat: -38.11633,
	long: 76.33245,
	isFound: false
},
{
	name: 'Rotoiti',
	lat: -38.04919,
	long: 76.48289,
	isFound: false
},
{
	name: 'Roto',
	lat: -38.88333,
	long: 75.03333,
	isFound: false
},
{
	name: 'Rotherham',
	lat: -42.7,
	long: 72.95,
	isFound: false
},
{
	name: 'Roslyn Bush',
	lat: -46.35,
	long: 68.45,
	isFound: false
},
{
	name: 'Rongotea',
	lat: -40.29262,
	long: 75.42514,
	isFound: false
},
{
	name: 'Rongahere',
	lat: -45.98333,
	long: 69.5,
	isFound: false
},
{
	name: 'Romahapa',
	lat: -46.35,
	long: 69.73333,
	isFound: false
},
{
	name: 'Rolleston',
	lat: -43.58333,
	long: 72.38333,
	isFound: false
},
{
	name: 'Rockville',
	lat: -40.73333,
	long: 72.63333,
	isFound: false
},
{
	name: 'Rocklands',
	lat: -45.66667,
	long: 69.98333,
	isFound: false
},
{
	name: 'Rock and Pillar',
	lat: -45.4,
	long: 70.18333,
	isFound: false
},
{
	name: 'Robinsons Bay',
	lat: -43.76667,
	long: 72.96667,
	isFound: false
},
{
	name: 'Roa',
	lat: -42.35,
	long: 71.38333,
	isFound: false
},
{
	name: 'Riwaka',
	lat: -41.08333,
	long: 173,
	isFound: false
},
{
	name: 'Riverside',
	lat: -44.01667,
	long: 71.83333,
	isFound: false
},
{
	name: 'Riversdale',
	lat: -45.9,
	long: 68.75,
	isFound: false
},
{
	name: 'Riverlea',
	lat: -39.43333,
	long: 74.08333,
	isFound: false
},
{
	name: 'Riverhead',
	lat: -36.75,
	long: 74.6,
	isFound: false
},
{
	name: 'Rissington',
	lat: -39.45,
	long: 76.71667,
	isFound: false
},
{
	name: 'Riponui',
	lat: -35.56667,
	long: 74.15,
	isFound: false
},
{
	name: 'Ringway',
	lat: -46.16667,
	long: 68.01667,
	isFound: false
},
{
	name: 'Rimu',
	lat: -42.76667,
	long: 171,
	isFound: false
},
{
	name: 'Ridgelands',
	lat: -40.15,
	long: 75.6,
	isFound: false
},
{
	name: 'Richmond',
	lat: -41.33333,
	long: 73.18333,
	isFound: false
},
{
	name: 'Rewanui',
	lat: -42.38333,
	long: 71.31667,
	isFound: false
},
{
	name: 'Rewa',
	lat: -39.98333,
	long: 75.63333,
	isFound: false
},
{
	name: 'Rere',
	lat: -38.53333,
	long: 77.61667,
	isFound: false
},
{
	name: 'Reporoa',
	lat: -38.43594,
	long: 76.34117,
	isFound: false
},
{
	name: 'Renwick',
	lat: -41.5,
	long: 73.83333,
	isFound: false
},
{
	name: 'Renown',
	lat: -37.56667,
	long: 75.05,
	isFound: false
},
{
	name: 'Reikorangi',
	lat: -40.9,
	long: 75.08333,
	isFound: false
},
{
	name: 'Reidston',
	lat: -45.15,
	long: 70.85,
	isFound: false
},
{
	name: 'Rehia',
	lat: -36.06667,
	long: 74.03333,
	isFound: false
},
{
	name: 'Reefton',
	lat: -42.11667,
	long: 71.86667,
	isFound: false
},
{
	name: 'Redwoods Valley',
	lat: -41.3,
	long: 73.08333,
	isFound: false
},
{
	name: 'Red Vale',
	lat: -36.68333,
	long: 74.7,
	isFound: false
},
{
	name: 'Redhill',
	lat: -36.03333,
	long: 73.85,
	isFound: false
},
{
	name: 'Redcliffs',
	lat: -43.56152,
	long: 72.73654,
	isFound: false
},
{
	name: 'Raymonds Gap',
	lat: -46.1,
	long: 67.88333,
	isFound: false
},
{
	name: 'Rawhiti',
	lat: -35.23724,
	long: 74.25924,
	isFound: false
},
{
	name: 'Rawene',
	lat: -35.40217,
	long: 73.50317,
	isFound: false
},
{
	name: 'Raurimu',
	lat: -39.11667,
	long: 75.4,
	isFound: false
},
{
	name: 'Raurekau',
	lat: -46.15,
	long: 70.03333,
	isFound: false
},
{
	name: 'Raupunga',
	lat: -39.03333,
	long: 77.21667,
	isFound: false
},
{
	name: 'Raupo',
	lat: -42.31667,
	long: 71.58333,
	isFound: false
},
{
	name: 'Raupo',
	lat: -36.11667,
	long: 73.98333,
	isFound: false
},
{
	name: 'Raumati South',
	lat: -40.95,
	long: 74.98333,
	isFound: false
},
{
	name: 'Raumati Beach',
	lat: -40.91667,
	long: 74.98333,
	isFound: false
},
{
	name: 'Raumati',
	lat: -40.19084,
	long: 76.14633,
	isFound: false
},
{
	name: 'Raumai',
	lat: -40.21667,
	long: 75.76667,
	isFound: false
},
{
	name: 'Raukokore',
	lat: -37.65,
	long: 77.88333,
	isFound: false
},
{
	name: 'Ratapiko',
	lat: -39.2,
	long: 74.31667,
	isFound: false
},
{
	name: 'Ratanui',
	lat: -46.48333,
	long: 69.63333,
	isFound: false
},
{
	name: 'Rata',
	lat: -39.99399,
	long: 75.515,
	isFound: false
},
{
	name: 'Rapuwai',
	lat: -44.16667,
	long: 71.05,
	isFound: false
},
{
	name: 'Rapaura',
	lat: -41.46667,
	long: 73.9,
	isFound: false
},
{
	name: 'Rapanui',
	lat: -39.88333,
	long: 74.93333,
	isFound: false
},
{
	name: 'Rapaki',
	lat: -43.60572,
	long: 72.68147,
	isFound: false
},
{
	name: 'Rapahoe',
	lat: -42.36667,
	long: 71.25,
	isFound: false
},
{
	name: 'Rangiwahia',
	lat: -39.9,
	long: 75.91667,
	isFound: false
},
{
	name: 'Rangiuru',
	lat: -37.78333,
	long: 76.38333,
	isFound: false
},
{
	name: 'Rangitukia',
	lat: -37.76667,
	long: 78.45,
	isFound: false
},
{
	name: 'Rangitihi',
	lat: -35.13333,
	long: 73.33333,
	isFound: false
},
{
	name: 'Rangitatau',
	lat: -39.76667,
	long: 74.8,
	isFound: false
},
{
	name: 'Rangitata Island',
	lat: -44.13333,
	long: 71.46667,
	isFound: false
},
{
	name: 'Rangitata',
	lat: -44.06667,
	long: 71.36667,
	isFound: false
},
{
	name: 'Rangitaiki',
	lat: -38.87917,
	long: 76.37288,
	isFound: false
},
{
	name: 'Rangiriri',
	lat: -37.4305,
	long: 75.12971,
	isFound: false
},
{
	name: 'Rangiputa',
	lat: -34.88333,
	long: 73.3,
	isFound: false
},
{
	name: 'Rangi Point',
	lat: -35.46667,
	long: 73.38333,
	isFound: false
},
{
	name: 'Rangiotu',
	lat: -40.41667,
	long: 75.43333,
	isFound: false
},
{
	name: 'Rangikura',
	lat: -39.78333,
	long: 74.55,
	isFound: false
},
{
	name: 'Rangiahua',
	lat: -35.3,
	long: 73.63333,
	isFound: false
},
{
	name: 'Rangataua',
	lat: -39.43333,
	long: 75.46667,
	isFound: false
},
{
	name: 'Ranganui',
	lat: -36.15,
	long: 74.4,
	isFound: false
},
{
	name: 'Ranfurly',
	lat: -45.13333,
	long: 70.1,
	isFound: false
},
{
	name: 'Ramarama',
	lat: -37.15,
	long: 74.95,
	isFound: false
},
{
	name: 'Raketapauma',
	lat: -39.55128,
	long: 75.64997,
	isFound: false
},
{
	name: 'Rakautao',
	lat: -35.43333,
	long: 73.85,
	isFound: false
},
{
	name: 'Rakauroa',
	lat: -38.41667,
	long: 77.55,
	isFound: false
},
{
	name: 'Rakaunui',
	lat: -40.59338,
	long: 76.1353,
	isFound: false
},
{
	name: 'Rakauhauka',
	lat: -46.31667,
	long: 68.48333,
	isFound: false
},
{
	name: 'Rakau',
	lat: -41.41667,
	long: 72.78333,
	isFound: false
},
{
	name: 'Rakaia Gorge',
	lat: -43.51667,
	long: 71.65,
	isFound: false
},
{
	name: 'Rakaia',
	lat: -43.75,
	long: 72.01667,
	isFound: false
},
{
	name: 'Rai Valley',
	lat: -41.23333,
	long: 73.58333,
	isFound: false
},
{
	name: 'Rai Falls',
	lat: -41.29345,
	long: 73.57456,
	isFound: false
},
{
	name: 'Rahotu',
	lat: -39.33333,
	long: 73.8,
	isFound: false
},
{
	name: 'Rahiri',
	lat: -39.23333,
	long: 74.13333,
	isFound: false
},
{
	name: 'Raglan',
	lat: -37.8,
	long: 74.88333,
	isFound: false
},
{
	name: 'Raes Junction',
	lat: -45.78333,
	long: 69.46667,
	isFound: false
},
{
	name: 'Queensbury',
	lat: -44.83333,
	long: 69.33333,
	isFound: false
},
{
	name: 'Quarry Hills',
	lat: -46.55,
	long: 69.03333,
	isFound: false
},
{
	name: 'Pyramid',
	lat: -45.93333,
	long: 68.76667,
	isFound: false
},
{
	name: 'Puwera',
	lat: -35.78333,
	long: 74.28333,
	isFound: false
},
{
	name: 'Putiki',
	lat: -36.8,
	long: 75.06667,
	isFound: false
},
{
	name: 'Putangahau',
	lat: -46.55,
	long: 69.13333,
	isFound: false
},
{
	name: 'Pusey',
	lat: -44.05,
	long: 70.91667,
	isFound: false
},
{
	name: 'Puriri',
	lat: -37.23333,
	long: 75.63333,
	isFound: false
},
{
	name: 'Purerua',
	lat: -35.15,
	long: 74.03333,
	isFound: false
},
{
	name: 'Purekireki',
	lat: -46.35,
	long: 69.48333,
	isFound: false
},
{
	name: 'Purangi',
	lat: -39.15,
	long: 74.51667,
	isFound: false
},
{
	name: 'Pupuke',
	lat: -35.1,
	long: 73.71667,
	isFound: false
},
{
	name: 'Puponga',
	lat: -40.51667,
	long: 72.71667,
	isFound: false
},
{
	name: 'Puniwhakau',
	lat: -39.32821,
	long: 74.61653,
	isFound: false
},
{
	name: 'Puniho',
	lat: -39.2,
	long: 73.83333,
	isFound: false
},
{
	name: 'Pungarehu',
	lat: -39.28333,
	long: 73.8,
	isFound: false
},
{
	name: 'Punganui',
	lat: -36.63333,
	long: 74.48333,
	isFound: false
},
{
	name: 'Punawai',
	lat: -43.78333,
	long: 71.53333,
	isFound: false
},
{
	name: 'Punaromia',
	lat: -38.20635,
	long: 76.36936,
	isFound: false
},
{
	name: 'Punakitere',
	lat: -35.46667,
	long: 73.68333,
	isFound: false
},
{
	name: 'Pukeuri Junction',
	lat: -45.03333,
	long: 71.03333,
	isFound: false
},
{
	name: 'Puketutu',
	lat: -38.43333,
	long: 75.23333,
	isFound: false
},
{
	name: 'Puketui',
	lat: -37.1,
	long: 75.73333,
	isFound: false
},
{
	name: 'Puketotara',
	lat: -38.08333,
	long: 75.16667,
	isFound: false
},
{
	name: 'Puketona',
	lat: -35.3,
	long: 73.96667,
	isFound: false
},
{
	name: 'Puketitiri',
	lat: -39.28333,
	long: 76.55,
	isFound: false
},
{
	name: 'Puketiro',
	lat: -46.48333,
	long: 69.48333,
	isFound: false
},
{
	name: 'Puketi',
	lat: -46.05,
	long: 69.61667,
	isFound: false
},
{
	name: 'Puketeraki',
	lat: -45.66667,
	long: 70.65,
	isFound: false
},
{
	name: 'Puketapu',
	lat: -39.51667,
	long: 76.8,
	isFound: false
},
{
	name: 'Pukerua Bay',
	lat: -41.03333,
	long: 74.9,
	isFound: false
},
{
	name: 'Pukeroa',
	lat: -39.7841,
	long: 75.49724,
	isFound: false
},
{
	name: 'Pukerau',
	lat: -46.1,
	long: 69.1,
	isFound: false
},
{
	name: 'Pukerangi',
	lat: -45.63333,
	long: 70.21667,
	isFound: false
},
{
	name: 'Pukepito',
	lat: -46.16667,
	long: 69.65,
	isFound: false
},
{
	name: 'Pukeowhare',
	lat: -37.23333,
	long: 74.75,
	isFound: false
},
{
	name: 'Pukenui',
	lat: -34.81667,
	long: 73.11667,
	isFound: false
},
{
	name: 'Pukemiro Junction',
	lat: -37.6,
	long: 75.06667,
	isFound: false
},
{
	name: 'Pukemiro',
	lat: -37.61667,
	long: 75.03333,
	isFound: false
},
{
	name: 'Pukemaori',
	lat: -46.08333,
	long: 67.8,
	isFound: false
},
{
	name: 'Pukekura',
	lat: -43.01667,
	long: 70.66667,
	isFound: false
},
{
	name: 'Pukekoma',
	lat: -46.08333,
	long: 69.73333,
	isFound: false
},
{
	name: 'Pukekoikoi',
	lat: -41.15,
	long: 74.16667,
	isFound: false
},
{
	name: 'Pukekohe East',
	lat: -37.2,
	long: 74.95,
	isFound: false
},
{
	name: 'Pukekapia',
	lat: -37.53333,
	long: 75.11667,
	isFound: false
},
{
	name: 'Pukeinoi',
	lat: -38.13333,
	long: 74.88333,
	isFound: false
},
{
	name: 'Pukehuia',
	lat: -35.86667,
	long: 74.03333,
	isFound: false
},
{
	name: 'Pukehou',
	lat: -39.83333,
	long: 76.63333,
	isFound: false
},
{
	name: 'Pukehina',
	lat: -37.81667,
	long: 76.53333,
	isFound: false
},
{
	name: 'Pukehiki',
	lat: -45.88333,
	long: 70.63333,
	isFound: false
},
{
	name: 'Pukeawa',
	lat: -46.16667,
	long: 69.61667,
	isFound: false
},
{
	name: 'Pukeatua',
	lat: -38.06667,
	long: 75.55,
	isFound: false
},
{
	name: 'Pukearuhe',
	lat: -46.01667,
	long: 68.35,
	isFound: false
},
{
	name: 'Pukearuhe',
	lat: -38.9,
	long: 74.5,
	isFound: false
},
{
	name: 'Pukapuka',
	lat: -36.48333,
	long: 74.68333,
	isFound: false
},
{
	name: 'Pukahu',
	lat: -39.68333,
	long: 76.85,
	isFound: false
},
{
	name: 'Puhua',
	lat: -38.48333,
	long: 77.85,
	isFound: false
},
{
	name: 'Puhoi',
	lat: -36.5035,
	long: 74.66764,
	isFound: false
},
{
	name: 'Puhau',
	lat: -35.46667,
	long: 73.38333,
	isFound: false
},
{
	name: 'Puerua',
	lat: -46.31667,
	long: 69.68333,
	isFound: false
},
{
	name: 'Puaha',
	lat: -43.75,
	long: 72.83333,
	isFound: false
},
{
	name: 'Prebbleton',
	lat: -43.58333,
	long: 72.51667,
	isFound: false
},
{
	name: 'Poutu',
	lat: -39.06667,
	long: 75.75,
	isFound: false
},
{
	name: 'Pounawea',
	lat: -46.48333,
	long: 69.7,
	isFound: false
},
{
	name: 'Poukiore',
	lat: -39.8694,
	long: 75.621,
	isFound: false
},
{
	name: 'Poukawa',
	lat: -39.76667,
	long: 76.73333,
	isFound: false
},
{
	name: 'Potters Creek',
	lat: -43.35,
	long: 70.21667,
	isFound: false
},
{
	name: 'Port Waikato',
	lat: -37.39014,
	long: 74.72755,
	isFound: false
},
{
	name: 'Port Robinson',
	lat: -42.86667,
	long: 73.3,
	isFound: false
},
{
	name: 'Portobello',
	lat: -45.85,
	long: 70.65,
	isFound: false
},
{
	name: 'Port Nelson',
	lat: -41.26397,
	long: 73.27628,
	isFound: false
},
{
	name: 'Motueka',
	lat: -41.13333,
	long: 73.01667,
	isFound: false
},
{
	name: 'Port Molyneux',
	lat: -46.36667,
	long: 69.76667,
	isFound: false
},
{
	name: 'Portland',
	lat: -35.8,
	long: 74.31667,
	isFound: false
},
{
	name: 'Port Fitzroy',
	lat: -36.16667,
	long: 75.35,
	isFound: false
},
{
	name: 'Port Craig',
	lat: -46.21667,
	long: 67.35,
	isFound: false
},
{
	name: 'Port Charles',
	lat: -36.53333,
	long: 75.48333,
	isFound: false
},
{
	name: 'Port Awanui',
	lat: -37.83333,
	long: 78.45,
	isFound: false
},
{
	name: 'Port Albert',
	lat: -36.26667,
	long: 74.45,
	isFound: false
},
{
	name: 'Poroti',
	lat: -35.73333,
	long: 74.13333,
	isFound: false
},
{
	name: 'Poroporo',
	lat: -37.98333,
	long: 76.96667,
	isFound: false
},
{
	name: 'Porootarao',
	lat: -38.55,
	long: 75.31667,
	isFound: false
},
{
	name: 'Porirua',
	lat: -41.13333,
	long: 74.85,
	isFound: false
},
{
	name: 'Poranui',
	lat: -43.81667,
	long: 72.7,
	isFound: false
},
{
	name: 'Porangahau',
	lat: -40.3,
	long: 76.61667,
	isFound: false
},
{
	name: 'Popotunoa',
	lat: -46.1,
	long: 69.38333,
	isFound: false
},
{
	name: 'Poolburn',
	lat: -45.15,
	long: 69.66667,
	isFound: false
},
{
	name: 'Pongaroa',
	lat: -40.54215,
	long: 76.19367,
	isFound: false
},
{
	name: 'Pongakawa',
	lat: -37.81667,
	long: 76.48333,
	isFound: false
},
{
	name: 'Pomahaka',
	lat: -46.01667,
	long: 69.23333,
	isFound: false
},
{
	name: 'Pollok',
	lat: -37.13333,
	long: 74.61667,
	isFound: false
},
{
	name: 'Pokororo',
	lat: -41.21667,
	long: 72.83333,
	isFound: false
},
{
	name: 'Pokere',
	lat: -35.48333,
	long: 73.98333,
	isFound: false
},
{
	name: 'Pokeno',
	lat: -37.24502,
	long: 75.02049,
	isFound: false
},
{
	name: 'Pokapu',
	lat: -35.43333,
	long: 73.98333,
	isFound: false
},
{
	name: 'Pokaka',
	lat: -39.3,
	long: 75.4,
	isFound: false
},
{
	name: 'Pohuehue',
	lat: -36.45,
	long: 74.65,
	isFound: false
},
{
	name: 'Pohokura',
	lat: -39.16938,
	long: 74.67174,
	isFound: false
},
{
	name: 'Pohangina',
	lat: -40.17336,
	long: 75.7943,
	isFound: false
},
{
	name: 'Poerua',
	lat: -42.7,
	long: 71.5,
	isFound: false
},
{
	name: 'Plimmerton',
	lat: -41.08333,
	long: 74.86667,
	isFound: false
},
{
	name: 'Pleasant Valley',
	lat: -44.08333,
	long: 71.18333,
	isFound: false
},
{
	name: 'Pleasant Point',
	lat: -44.26667,
	long: 71.13333,
	isFound: false
},
{
	name: 'Pirongia',
	lat: -38,
	long: 175.2,
	isFound: false
},
{
	name: 'Piripiri',
	lat: -40.17356,
	long: 76.13466,
	isFound: false
},
{
	name: 'Pirinoa',
	lat: -41.35,
	long: 75.2,
	isFound: false
},
{
	name: 'Piriaka',
	lat: -38.91667,
	long: 75.35,
	isFound: false
},
{
	name: 'Pipiroa',
	lat: -37.21667,
	long: 75.48333,
	isFound: false
},
{
	name: 'Pipiriki',
	lat: -39.48333,
	long: 75.05,
	isFound: false
},
{
	name: 'Piopio',
	lat: -38.46667,
	long: 75.01667,
	isFound: false
},
{
	name: 'Pinohia',
	lat: -41.21667,
	long: 73.85,
	isFound: false
},
{
	name: 'Pine Valley',
	lat: -41.53333,
	long: 73.53333,
	isFound: false
},
{
	name: 'Pine Bush',
	lat: -46.46667,
	long: 68.8,
	isFound: false
},
{
	name: 'Pikowai',
	lat: -37.85646,
	long: 76.66222,
	isFound: false
},
{
	name: 'Piko',
	lat: -46.11667,
	long: 67.73333,
	isFound: false
},
{
	name: 'Pikiariki',
	lat: -39.26667,
	long: 75.21667,
	isFound: false
},
{
	name: 'Pihama',
	lat: -39.5,
	long: 73.93333,
	isFound: false
},
{
	name: 'Piha',
	lat: -36.95,
	long: 74.46667,
	isFound: false
},
{
	name: 'Pigeon Bush',
	lat: -41.15,
	long: 75.26667,
	isFound: false
},
{
	name: 'Pigeon Bay',
	lat: -43.68802,
	long: 72.89288,
	isFound: false
},
{
	name: 'Piako',
	lat: -37.65,
	long: 75.55,
	isFound: false
},
{
	name: 'Phoebe',
	lat: -42.76667,
	long: 73.23333,
	isFound: false
},
{
	name: 'Petane',
	lat: -39.38333,
	long: 76.86667,
	isFound: false
},
{
	name: 'Peria',
	lat: -35.08333,
	long: 73.5,
	isFound: false
},
{
	name: 'Pepepe',
	lat: -37.58333,
	long: 74.95,
	isFound: false
},
{
	name: 'Wanaka',
	lat: -44.7,
	long: 69.15,
	isFound: false
},
{
	name: 'Pehu',
	lat: -39.05,
	long: 74.56667,
	isFound: false
},
{
	name: 'Pehiri',
	lat: -38.63333,
	long: 77.7,
	isFound: false
},
{
	name: 'Peel Forest',
	lat: -43.91667,
	long: 71.26667,
	isFound: false
},
{
	name: 'Peebles',
	lat: -44.96667,
	long: 70.93333,
	isFound: false
},
{
	name: 'Pawarenga',
	lat: -35.35,
	long: 73.25,
	isFound: false
},
{
	name: 'Pauatahanui',
	lat: -41.1,
	long: 74.91667,
	isFound: false
},
{
	name: 'Pauanui',
	lat: -37.01667,
	long: 75.86667,
	isFound: false
},
{
	name: 'Paua',
	lat: -34.53333,
	long: 72.91667,
	isFound: false
},
{
	name: 'Patutahi',
	lat: -38.61667,
	long: 77.9,
	isFound: false
},
{
	name: 'Paturau River',
	lat: -40.65,
	long: 72.43333,
	isFound: false
},
{
	name: 'Patunga',
	lat: -38.96667,
	long: 75.23333,
	isFound: false
},
{
	name: 'Patumahoe',
	lat: -37.18333,
	long: 74.83333,
	isFound: false
},
{
	name: 'Patuki',
	lat: -40.73333,
	long: 73.95,
	isFound: false
},
{
	name: 'Patoka',
	lat: -39.35,
	long: 76.61667,
	isFound: false
},
{
	name: 'Patetonga',
	lat: -37.41667,
	long: 75.46667,
	isFound: false
},
{
	name: 'Patearoa',
	lat: -45.26667,
	long: 70.05,
	isFound: false
},
{
	name: 'Patangata',
	lat: -39.91667,
	long: 76.71667,
	isFound: false
},
{
	name: 'Parua Bay',
	lat: -35.76667,
	long: 74.46667,
	isFound: false
},
{
	name: 'Parore',
	lat: -35.91667,
	long: 73.83333,
	isFound: false
},
{
	name: 'Paroa',
	lat: -42.51667,
	long: 71.16667,
	isFound: false
},
{
	name: 'Parnell',
	lat: -36.86667,
	long: 74.78333,
	isFound: false
},
{
	name: 'Parnassus',
	lat: -42.71667,
	long: 73.3,
	isFound: false
},
{
	name: 'Parkvale',
	lat: -41.05,
	long: 75.55,
	isFound: false
},
{
	name: 'Parkhurst',
	lat: -36.65,
	long: 74.4,
	isFound: false
},
{
	name: 'Park Hill',
	lat: -45.81667,
	long: 69.21667,
	isFound: false
},
{
	name: 'Parikino',
	lat: -39.8,
	long: 75.15,
	isFound: false
},
{
	name: 'Parihaka Pa',
	lat: -39.3,
	long: 73.83333,
	isFound: false
},
{
	name: 'Paretai',
	lat: -46.33333,
	long: 69.78333,
	isFound: false
},
{
	name: 'Pareora West',
	lat: -44.43333,
	long: 71.13333,
	isFound: false
},
{
	name: 'Pareora',
	lat: -44.5,
	long: 71.2,
	isFound: false
},
{
	name: 'Paremoremo',
	lat: -36.76667,
	long: 74.66667,
	isFound: false
},
{
	name: 'Paremata',
	lat: -41.11667,
	long: 74.86667,
	isFound: false
},
{
	name: 'Parawa',
	lat: -45.55,
	long: 68.53333,
	isFound: false
},
{
	name: 'Parau',
	lat: -36.9682,
	long: 74.6137,
	isFound: false
},
{
	name: 'Paraparaumu Beach',
	lat: -40.9,
	long: 74.98333,
	isFound: false
},
{
	name: 'Paraparaumu',
	lat: -40.91667,
	long: 75.01667,
	isFound: false
},
{
	name: 'Parapara',
	lat: -35.01667,
	long: 73.43333,
	isFound: false
},
{
	name: 'Paraoanui',
	lat: -35.05,
	long: 73.61667,
	isFound: false
},
{
	name: 'Paranui',
	lat: -35.06667,
	long: 73.46667,
	isFound: false
},
{
	name: 'Parakao',
	lat: -35.71667,
	long: 73.95,
	isFound: false
},
{
	name: 'Parakakau',
	lat: -36.58333,
	long: 74.6,
	isFound: false
},
{
	name: 'Parakai',
	lat: -36.65,
	long: 74.43333,
	isFound: false
},
{
	name: 'Paradise',
	lat: -44.72434,
	long: 68.36542,
	isFound: false
},
{
	name: 'Para',
	lat: -41.36667,
	long: 73.95,
	isFound: false
},
{
	name: 'Papatowai',
	lat: -46.56069,
	long: 69.47068,
	isFound: false
},
{
	name: 'Papatotara',
	lat: -46.15,
	long: 67.63333,
	isFound: false
},
{
	name: 'Papatawa',
	lat: -40.31736,
	long: 75.92862,
	isFound: false
},
{
	name: 'Paparoa',
	lat: -36.1,
	long: 74.23333,
	isFound: false
},
{
	name: 'Paparimu',
	lat: -37.13333,
	long: 75.11667,
	isFound: false
},
{
	name: 'Paparata Valley',
	lat: -37.16667,
	long: 75.11667,
	isFound: false
},
{
	name: 'Paparata',
	lat: -37.15,
	long: 75.06667,
	isFound: false
},
{
	name: 'Paparangi',
	lat: -39.7,
	long: 74.96667,
	isFound: false
},
{
	name: 'Papamoa',
	lat: -37.73333,
	long: 76.3,
	isFound: false
},
{
	name: 'Papakaio',
	lat: -44.98333,
	long: 70.98333,
	isFound: false
},
{
	name: 'Panguru',
	lat: -35.38333,
	long: 73.38333,
	isFound: false
},
{
	name: 'Pangatotara',
	lat: -41.16667,
	long: 72.91667,
	isFound: false
},
{
	name: 'Pandora',
	lat: -34.45363,
	long: 72.77786,
	isFound: false
},
{
	name: 'Pamapuria',
	lat: -35.13333,
	long: 73.35,
	isFound: false
},
{
	name: 'Palmerston North',
	lat: -40.35636,
	long: 75.61113,
	isFound: false
},
{
	name: 'Pakowhai',
	lat: -39.58333,
	long: 76.86667,
	isFound: false
},
{
	name: 'Pakotai',
	lat: -35.68333,
	long: 73.9,
	isFound: false
},
{
	name: 'Pakiri',
	lat: -36.26667,
	long: 74.73333,
	isFound: false
},
{
	name: 'Pakipaki',
	lat: -39.67444,
	long: 76.82417,
	isFound: false
},
{
	name: 'Pakihiroa',
	lat: -37.85,
	long: 78.06667,
	isFound: false
},
{
	name: 'Pakihikura',
	lat: -39.93333,
	long: 75.71667,
	isFound: false
},
{
	name: 'Pakawau',
	lat: -40.6,
	long: 72.68333,
	isFound: false
},
{
	name: 'Pakatoa',
	lat: -36.79697,
	long: 75.19451,
	isFound: false
},
{
	name: 'Pakaraka',
	lat: -35.35,
	long: 73.95,
	isFound: false
},
{
	name: 'Paihia',
	lat: -35.28067,
	long: 74.09103,
	isFound: false
},
{
	name: 'Paiaka',
	lat: -35.51667,
	long: 74.15,
	isFound: false
},
{
	name: 'Pahoia',
	lat: -37.64468,
	long: 76.00415,
	isFound: false
},
{
	name: 'Pahitoa',
	lat: -36.78333,
	long: 74.48333,
	isFound: false
},
{
	name: 'Pahia',
	lat: -46.33333,
	long: 67.75,
	isFound: false
},
{
	name: 'Pahi',
	lat: -36.15718,
	long: 74.22827,
	isFound: false
},
{
	name: 'Pahautea',
	lat: -41.23333,
	long: 75.38333,
	isFound: false
},
{
	name: 'Paetawai',
	lat: -35.53333,
	long: 74.45,
	isFound: false
},
{
	name: 'Paerau',
	lat: -45.41667,
	long: 69.95,
	isFound: false
},
{
	name: 'Paerata',
	lat: -37.16667,
	long: 74.9,
	isFound: false
},
{
	name: 'Paengaroa',
	lat: -37.81667,
	long: 76.41667,
	isFound: false
},
{
	name: 'Paemako',
	lat: -38.46667,
	long: 75.03333,
	isFound: false
},
{
	name: 'Paekakariki',
	lat: -40.98544,
	long: 74.95449,
	isFound: false
},
{
	name: 'Oxford',
	lat: -43.3,
	long: 72.18333,
	isFound: false
},
{
	name: 'Owhiro',
	lat: -38.16667,
	long: 74.9,
	isFound: false
},
{
	name: 'Owersby',
	lat: -44.06667,
	long: 70.95,
	isFound: false
},
{
	name: 'Owen Valley',
	lat: -41.63333,
	long: 72.51667,
	isFound: false
},
{
	name: 'Owen River',
	lat: -41.65,
	long: 72.45,
	isFound: false
},
{
	name: 'Owen Junction',
	lat: -41.7,
	long: 72.5,
	isFound: false
},
{
	name: 'Owaka Valley',
	lat: -46.43333,
	long: 69.58333,
	isFound: false
},
{
	name: 'Owaka',
	lat: -46.45,
	long: 69.66667,
	isFound: false
},
{
	name: 'Overdale',
	lat: -43.78333,
	long: 71.98333,
	isFound: false
},
{
	name: 'Outram',
	lat: -45.86667,
	long: 70.23333,
	isFound: false
},
{
	name: 'Ouruhia',
	lat: -43.45,
	long: 72.65,
	isFound: false
},
{
	name: 'Oue',
	lat: -35.45,
	long: 73.48333,
	isFound: false
},
{
	name: 'Oturehua',
	lat: -45,
	long: 169.91667,
	isFound: false
},
{
	name: 'Otumoetai',
	lat: -37.67156,
	long: 76.13865,
	isFound: false
},
{
	name: 'Otukou',
	lat: -39.03333,
	long: 75.65,
	isFound: false
},
{
	name: 'Otuhi',
	lat: -35.8,
	long: 74.15,
	isFound: false
},
{
	name: 'Otorohanga',
	lat: -38.18333,
	long: 75.2,
	isFound: false
},
{
	name: 'Otoroa',
	lat: -35.06667,
	long: 73.86667,
	isFound: false
},
{
	name: 'Otonga',
	lat: -35.53333,
	long: 74.31667,
	isFound: false
},
{
	name: 'Otoko',
	lat: -38.4,
	long: 77.66667,
	isFound: false
},
{
	name: 'Otokia',
	lat: -45.95,
	long: 70.2,
	isFound: false
},
{
	name: 'Otiria',
	lat: -35.4,
	long: 174,
	isFound: false
},
{
	name: 'Otira',
	lat: -42.83038,
	long: 71.56443,
	isFound: false
},
{
	name: 'Otipua',
	lat: -44.43333,
	long: 71.16667,
	isFound: false
},
{
	name: 'Otekura',
	lat: -46.43333,
	long: 69.76667,
	isFound: false
},
{
	name: 'Otekaieke',
	lat: -44.82398,
	long: 70.56901,
	isFound: false
},
{
	name: 'Otaua',
	lat: -37.30645,
	long: 74.74085,
	isFound: false
},
{
	name: 'Otatara',
	lat: -46.43333,
	long: 68.3,
	isFound: false
},
{
	name: 'Otarawao',
	lat: -41.05,
	long: 73.68333,
	isFound: false
},
{
	name: 'Otara',
	lat: -46.63333,
	long: 68.88333,
	isFound: false
},
{
	name: 'Otapiri Gorge',
	lat: -46.05,
	long: 68.45,
	isFound: false
},
{
	name: 'Otanomomo',
	lat: -46.3,
	long: 69.75,
	isFound: false
},
{
	name: 'Otangihaku',
	lat: -38.03333,
	long: 177,
	isFound: false
},
{
	name: 'Otangaroa',
	lat: -35.08333,
	long: 73.63333,
	isFound: false
},
{
	name: 'Otanerau',
	lat: -41.18333,
	long: 74.33333,
	isFound: false
},
{
	name: 'Otane',
	lat: -39.88333,
	long: 76.63333,
	isFound: false
},
{
	name: 'Otamita',
	lat: -46.01667,
	long: 68.85,
	isFound: false
},
{
	name: 'Otamarakau',
	lat: -37.83333,
	long: 76.6,
	isFound: false
},
{
	name: 'Otama',
	lat: -45.95,
	long: 68.86667,
	isFound: false
},
{
	name: 'Otakou',
	lat: -45.81667,
	long: 70.71667,
	isFound: false
},
{
	name: 'Otakiri',
	lat: -37.98333,
	long: 76.76667,
	isFound: false
},
{
	name: 'Otaki Beach',
	lat: -40.75,
	long: 75.11667,
	isFound: false
},
{
	name: 'Otakeho',
	lat: -39.55,
	long: 74.05,
	isFound: false
},
{
	name: 'Otaitai',
	lat: -46.33333,
	long: 68.05,
	isFound: false
},
{
	name: 'Otaio',
	lat: -44.58333,
	long: 71.16667,
	isFound: false
},
{
	name: 'Otahuti',
	lat: -46.25,
	long: 68.2,
	isFound: false
},
{
	name: 'Oruru',
	lat: -35.03333,
	long: 73.5,
	isFound: false
},
{
	name: 'Oruanui',
	lat: -38.58333,
	long: 76.03333,
	isFound: false
},
{
	name: 'Oruaiwi',
	lat: -38.81667,
	long: 75.45,
	isFound: false
},
{
	name: 'Orton',
	lat: -44.16667,
	long: 71.43333,
	isFound: false
},
{
	name: 'Oroua Downs',
	lat: -40.36667,
	long: 75.31667,
	isFound: false
},
{
	name: 'Oropi',
	lat: -37.83948,
	long: 76.16105,
	isFound: false
},
{
	name: 'Ormondville',
	lat: -40.10906,
	long: 76.26405,
	isFound: false
},
{
	name: 'Ormond',
	lat: -38.56667,
	long: 77.91667,
	isFound: false
},
{
	name: 'Orini',
	lat: -37.56667,
	long: 75.3,
	isFound: false
},
{
	name: 'Orewa',
	lat: -36.56667,
	long: 74.7,
	isFound: false
},
{
	name: 'Oreti Plains',
	lat: -46.13333,
	long: 68.23333,
	isFound: false
},
{
	name: 'Orere Point',
	lat: -36.96667,
	long: 75.25,
	isFound: false
},
{
	name: 'Orepuki',
	lat: -46.28333,
	long: 67.73333,
	isFound: false
},
{
	name: 'Orawia Bridge',
	lat: -46.05,
	long: 67.8,
	isFound: false
},
{
	name: 'Orawia',
	lat: -46.05,
	long: 67.81667,
	isFound: false
},
{
	name: 'Oratia',
	lat: -36.91667,
	long: 74.61667,
	isFound: false
},
{
	name: 'Orari',
	lat: -44.13333,
	long: 71.3,
	isFound: false
},
{
	name: 'Oranoa',
	lat: -35.7,
	long: 73.6,
	isFound: false
},
{
	name: 'Orangimea',
	lat: -39.66667,
	long: 74.86667,
	isFound: false
},
{
	name: 'Orangapai',
	lat: -45.23333,
	long: 70.13333,
	isFound: false
},
{
	name: 'Opuawhanga',
	lat: -35.5,
	long: 74.35,
	isFound: false
},
{
	name: 'Opuatia',
	lat: -37.4048,
	long: 75.00019,
	isFound: false
},
{
	name: 'Opua',
	lat: -35.31667,
	long: 74.11667,
	isFound: false
},
{
	name: 'Opoutere',
	lat: -37.11667,
	long: 75.88333,
	isFound: false
},
{
	name: 'Opoutama',
	lat: -39.05978,
	long: 77.83187,
	isFound: false
},
{
	name: 'Opononi',
	lat: -35.5,
	long: 73.4,
	isFound: false
},
{
	name: 'Oponae',
	lat: -38.25,
	long: 77.3,
	isFound: false
},
{
	name: 'Opio',
	lat: -45.95,
	long: 68.1,
	isFound: false
},
{
	name: 'Ophir',
	lat: -45.11667,
	long: 69.6,
	isFound: false
},
{
	name: 'Oparau',
	lat: -38.05,
	long: 74.91667,
	isFound: false
},
{
	name: 'Oparara',
	lat: -41.21667,
	long: 72.11667,
	isFound: false
},
{
	name: 'Opapa',
	lat: -39.8,
	long: 76.68333,
	isFound: false
},
{
	name: 'Opaheke',
	lat: -37.08333,
	long: 74.96667,
	isFound: false
},
{
	name: 'Oniao',
	lat: -38.56667,
	long: 75.08333,
	isFound: false
},
{
	name: 'Ongarue',
	lat: -38.71667,
	long: 75.28333,
	isFound: false
},
{
	name: 'Onga Onga',
	lat: -39.91667,
	long: 76.41667,
	isFound: false
},
{
	name: 'Onewhero',
	lat: -37.32782,
	long: 74.9153,
	isFound: false
},
{
	name: 'Onetea',
	lat: -35.81667,
	long: 73.91667,
	isFound: false
},
{
	name: 'Onetangi',
	lat: -36.78333,
	long: 75.08333,
	isFound: false
},
{
	name: 'Onerahi',
	lat: -35.76667,
	long: 74.36667,
	isFound: false
},
{
	name: 'Onekawa',
	lat: -39.50914,
	long: 76.88958,
	isFound: false
},
{
	name: 'Onekaka',
	lat: -40.75,
	long: 72.7,
	isFound: false
},
{
	name: 'Onauku',
	lat: -41.11667,
	long: 74.36667,
	isFound: false
},
{
	name: 'Onapua',
	lat: -41.26667,
	long: 74.18333,
	isFound: false
},
{
	name: 'Onamalutu',
	lat: -41.45,
	long: 73.71667,
	isFound: false
},
{
	name: 'Onaero',
	lat: -39,
	long: 174.35,
	isFound: false
},
{
	name: 'Omokoroa Beach',
	lat: -37.63333,
	long: 76.05,
	isFound: false
},
{
	name: 'Omokoroa',
	lat: -37.64849,
	long: 76.03497,
	isFound: false
},
{
	name: 'Omoana',
	lat: -39.41667,
	long: 74.58333,
	isFound: false
},
{
	name: 'Omimi',
	lat: -45.7,
	long: 70.6,
	isFound: false
},
{
	name: 'Omihi',
	lat: -43.01667,
	long: 72.85,
	isFound: false
},
{
	name: 'Omiha',
	lat: -36.81667,
	long: 75.06667,
	isFound: false
},
{
	name: 'Omata',
	lat: -39.1,
	long: 74.01667,
	isFound: false
},
{
	name: 'Omarama',
	lat: -44.48848,
	long: 69.96626,
	isFound: false
},
{
	name: 'Omapere',
	lat: -35.53333,
	long: 73.38333,
	isFound: false
},
{
	name: 'Omanawa Falls',
	lat: -37.85,
	long: 76.08333,
	isFound: false
},
{
	name: 'Omanawa',
	lat: -37.8,
	long: 76.08333,
	isFound: false
},
{
	name: 'Omanaia',
	lat: -35.46667,
	long: 73.53333,
	isFound: false
},
{
	name: 'Omana',
	lat: -35.9,
	long: 74.08333,
	isFound: false
},
{
	name: 'Omakau',
	lat: -45.08333,
	long: 69.6,
	isFound: false
},
{
	name: 'Omaio',
	lat: -37.81667,
	long: 77.66667,
	isFound: false
},
{
	name: 'Omahu',
	lat: -37.26667,
	long: 75.66667,
	isFound: false
},
{
	name: 'Omahanui',
	lat: -38.86667,
	long: 77.25,
	isFound: false
},
{
	name: 'Okuru',
	lat: -43.90766,
	long: 68.90089,
	isFound: false
},
{
	name: 'Okupu',
	lat: -36.26667,
	long: 75.43333,
	isFound: false
},
{
	name: 'Okukari',
	lat: -41.2,
	long: 74.3,
	isFound: false
},
{
	name: 'Okoroire',
	lat: -37.95,
	long: 75.8,
	isFound: false
},
{
	name: 'Okoki',
	lat: -39.01667,
	long: 74.48333,
	isFound: false
},
{
	name: 'Okoia',
	lat: -39.93333,
	long: 75.13333,
	isFound: false
},
{
	name: 'Okiwi',
	lat: -36.15,
	long: 75.41667,
	isFound: false
},
{
	name: 'Okiore',
	lat: -38.18333,
	long: 77.28333,
	isFound: false
},
{
	name: 'Okete',
	lat: -37.81667,
	long: 74.93333,
	isFound: false
},
{
	name: 'Okere Falls',
	lat: -38.01703,
	long: 76.34507,
	isFound: false
},
{
	name: 'Okauia',
	lat: -37.787,
	long: 75.83987,
	isFound: false
},
{
	name: 'Okau',
	lat: -38.86667,
	long: 74.65,
	isFound: false
},
{
	name: 'Okato',
	lat: -39.2,
	long: 73.88333,
	isFound: false
},
{
	name: 'Okarito',
	lat: -43.23333,
	long: 70.18333,
	isFound: false
},
{
	name: 'Okaramio',
	lat: -41.41667,
	long: 73.76667,
	isFound: false
},
{
	name: 'Okains Bay',
	lat: -43.71667,
	long: 73.03333,
	isFound: false
},
{
	name: 'Okaihau',
	lat: -35.31667,
	long: 73.78333,
	isFound: false
},
{
	name: 'Okaiawa',
	lat: -39.53333,
	long: 74.2,
	isFound: false
},
{
	name: 'Okahukura',
	lat: -38.78333,
	long: 75.21667,
	isFound: false
},
{
	name: 'Oio',
	lat: -39.05,
	long: 75.41667,
	isFound: false
},
{
	name: 'Ohura',
	lat: -38.83333,
	long: 74.98333,
	isFound: false
},
{
	name: 'Ohotu',
	lat: -39.71187,
	long: 75.83889,
	isFound: false
},
{
	name: 'Ohope Beach',
	lat: -37.97519,
	long: 77.07588,
	isFound: false
},
{
	name: 'Ohoka',
	lat: -43.36667,
	long: 72.56667,
	isFound: false
},
{
	name: 'Ohirangi',
	lat: -36.7,
	long: 74.45,
	isFound: false
},
{
	name: 'Ohingaroa',
	lat: -41.25,
	long: 73.88333,
	isFound: false
},
{
	name: 'Ohingaiti',
	lat: -39.86291,
	long: 75.70606,
	isFound: false
},
{
	name: 'Ohinewai',
	lat: -37.48333,
	long: 75.16667,
	isFound: false
},
{
	name: 'Ohinepanea',
	lat: -37.82185,
	long: 76.56428,
	isFound: false
},
{
	name: 'Ohinepaka',
	lat: -39.03333,
	long: 77.31667,
	isFound: false
},
{
	name: 'Ohinemutu',
	lat: -38.15,
	long: 76.28333,
	isFound: false
},
{
	name: 'Ohawe Beach',
	lat: -39.58333,
	long: 74.2,
	isFound: false
},
{
	name: 'Ohautira',
	lat: -37.76746,
	long: 74.97204,
	isFound: false
},
{
	name: 'Ohaupo',
	lat: -37.91667,
	long: 75.31667,
	isFound: false
},
{
	name: 'Ohau',
	lat: -40.66667,
	long: 75.25,
	isFound: false
},
{
	name: 'Ohariu',
	lat: -41.2,
	long: 74.76667,
	isFound: false
},
{
	name: 'Ohangai',
	lat: -39.6,
	long: 74.33333,
	isFound: false
},
{
	name: 'Ohakea',
	lat: -40.2,
	long: 75.4,
	isFound: false
},
{
	name: 'Ohai',
	lat: -45.91667,
	long: 67.95,
	isFound: false
},
{
	name: 'Ohaeawai',
	lat: -35.35,
	long: 73.88333,
	isFound: false
},
{
	name: 'Oeo',
	lat: -39.53333,
	long: 73.98333,
	isFound: false
},
{
	name: 'Ocean Grove',
	lat: -45.9,
	long: 70.55,
	isFound: false
},
{
	name: 'Ocean Beach',
	lat: -46.58333,
	long: 68.31667,
	isFound: false
},
{
	name: 'Ocean Bay',
	lat: -41.33333,
	long: 74.1,
	isFound: false
},
{
	name: 'Oaro',
	lat: -42.51667,
	long: 73.5,
	isFound: false
},
{
	name: 'Oaonui',
	lat: -39.4,
	long: 73.81667,
	isFound: false
},
{
	name: 'Oakura',
	lat: -39.11667,
	long: 73.95,
	isFound: false
},
{
	name: 'Oakleigh',
	lat: -35.83333,
	long: 74.31667,
	isFound: false
},
{
	name: 'Nukutawhiti',
	lat: -35.66667,
	long: 73.88333,
	isFound: false
},
{
	name: 'Nukumaru',
	lat: -39.83333,
	long: 74.8,
	isFound: false
},
{
	name: 'Nukuhau',
	lat: -39.6,
	long: 74.66667,
	isFound: false
},
{
	name: 'Nuhaka',
	lat: -39.05,
	long: 77.75,
	isFound: false
},
{
	name: 'Norwood',
	lat: -43.65,
	long: 72.25,
	isFound: false
},
{
	name: 'North Taieri',
	lat: -45.85,
	long: 70.33333,
	isFound: false
},
{
	name: 'North Egmont',
	lat: -39.28333,
	long: 74.1,
	isFound: false
},
{
	name: 'North Loburn',
	lat: -43.21667,
	long: 72.5,
	isFound: false
},
{
	name: 'North East Valley',
	lat: -45.85,
	long: 70.53333,
	isFound: false
},
{
	name: 'Norsewood',
	lat: -40.07049,
	long: 76.21826,
	isFound: false
},
{
	name: 'Normanby',
	lat: -44.45477,
	long: 71.24094,
	isFound: false
},
{
	name: 'Normanby',
	lat: -39.53333,
	long: 74.28333,
	isFound: false
},
{
	name: 'Nokomai',
	lat: -45.5,
	long: 68.66667,
	isFound: false
},
{
	name: 'Nireaha',
	lat: -40.61503,
	long: 75.65289,
	isFound: false
},
{
	name: 'Nikau',
	lat: -41.55,
	long: 71.93333,
	isFound: false
},
{
	name: 'Nihoniho',
	lat: -38.78333,
	long: 75.05,
	isFound: false
},
{
	name: 'Nightcaps',
	lat: -45.96667,
	long: 68.03333,
	isFound: false
},
{
	name: 'Niagara',
	lat: -46.6,
	long: 69.13333,
	isFound: false
},
{
	name: 'Ngutuwera',
	lat: -39.75,
	long: 74.73333,
	isFound: false
},
{
	name: 'Ngutunui',
	lat: -38.08333,
	long: 75.13333,
	isFound: false
},
{
	name: 'Ngunguru',
	lat: -35.61667,
	long: 74.5,
	isFound: false
},
{
	name: 'Ngongotaha',
	lat: -38.08333,
	long: 76.2,
	isFound: false
},
{
	name: 'Ngawha',
	lat: -35.36667,
	long: 73.86667,
	isFound: false
},
{
	name: 'Ngawaro',
	lat: -37.93333,
	long: 76.15,
	isFound: false
},
{
	name: 'Ngauranga',
	lat: -41.24871,
	long: 74.81145,
	isFound: false
},
{
	name: 'Ngaturi',
	lat: -40.46817,
	long: 75.9227,
	isFound: false
},
{
	name: 'Ngatira',
	lat: -38.1,
	long: 75.9,
	isFound: false
},
{
	name: 'Ngatimoti',
	lat: -41.21667,
	long: 72.9,
	isFound: false
},
{
	name: 'Ngatea',
	lat: -37.28333,
	long: 75.5,
	isFound: false
},
{
	name: 'Ngatapa',
	lat: -38.58333,
	long: 77.8,
	isFound: false
},
{
	name: 'Ngataki',
	lat: -34.73333,
	long: 73.05,
	isFound: false
},
{
	name: 'Ngaroto',
	lat: -37.98333,
	long: 75.3,
	isFound: false
},
{
	name: 'Ngaro',
	lat: -45.9,
	long: 67.98333,
	isFound: false
},
{
	name: 'Ngapuna',
	lat: -45.45,
	long: 70.16667,
	isFound: false
},
{
	name: 'Ngapuke',
	lat: -38.85,
	long: 75.46667,
	isFound: false
},
{
	name: 'Ngapuhi',
	lat: -35.45,
	long: 73.81667,
	isFound: false
},
{
	name: 'Ngapipito',
	lat: -35.43333,
	long: 73.9,
	isFound: false
},
{
	name: 'Ngapara',
	lat: -44.95,
	long: 70.75,
	isFound: false
},
{
	name: 'Ngamoko',
	lat: -40.05446,
	long: 76.16315,
	isFound: false
},
{
	name: 'Ngakawau',
	lat: -41.61667,
	long: 71.88333,
	isFound: false
},
{
	name: 'Ngaio',
	lat: -41.25039,
	long: 74.77394,
	isFound: false
},
{
	name: 'Ngahere',
	lat: -42.4,
	long: 71.45,
	isFound: false
},
{
	name: 'Ngaere',
	lat: -39.38333,
	long: 74.3,
	isFound: false
},
{
	name: 'Newton Flat',
	lat: -41.77557,
	long: 72.15816,
	isFound: false
},
{
	name: 'Newstead',
	lat: -37.78333,
	long: 75.35,
	isFound: false
},
{
	name: 'New Plymouth',
	lat: -39.06667,
	long: 74.08333,
	isFound: false
},
{
	name: 'Newman',
	lat: -40.61519,
	long: 75.7137,
	isFound: false
},
{
	name: 'Newland',
	lat: -43.88333,
	long: 71.85,
	isFound: false
},
{
	name: 'New Haven',
	lat: -46.46667,
	long: 69.71667,
	isFound: false
},
{
	name: 'New Brighton',
	lat: -43.51667,
	long: 72.73333,
	isFound: false
},
{
	name: 'Nevis',
	lat: -45.23333,
	long: 68.93333,
	isFound: false
},
{
	name: 'Nevesville',
	lat: -37.16667,
	long: 75.7,
	isFound: false
},
{
	name: 'Netherton',
	lat: -37.33333,
	long: 75.61667,
	isFound: false
},
{
	name: 'Nelson Creek',
	lat: -42.41667,
	long: 71.51667,
	isFound: false
},
{
	name: 'Nelson',
	lat: -41.27078,
	long: 73.28404,
	isFound: false
},
{
	name: 'Naumai',
	lat: -36.08333,
	long: 73.98333,
	isFound: false
},
{
	name: 'National Park',
	lat: -39.18333,
	long: 75.4,
	isFound: false
},
{
	name: 'Napier',
	lat: -39.4926,
	long: 76.91233,
	isFound: false
},
{
	name: 'Myross Bush',
	lat: -46.36667,
	long: 68.41667,
	isFound: false
},
{
	name: 'Murupara',
	lat: -38.46667,
	long: 76.7,
	isFound: false
},
{
	name: 'Murumuru',
	lat: -39.26667,
	long: 75.13333,
	isFound: false
},
{
	name: 'Muriwai Beach',
	lat: -36.83659,
	long: 74.43298,
	isFound: false
},
{
	name: 'Muriwai',
	lat: -38.76667,
	long: 77.91667,
	isFound: false
},
{
	name: 'Murimotu',
	lat: -39.55,
	long: 75.68333,
	isFound: false
},
{
	name: 'Murchison',
	lat: -41.8,
	long: 72.33333,
	isFound: false
},
{
	name: 'Mullet Point',
	lat: -36.43333,
	long: 74.75,
	isFound: false
},
{
	name: 'Mowhiti',
	lat: -45.65,
	long: 70.08333,
	isFound: false
},
{
	name: 'Mowhanau',
	lat: -39.86667,
	long: 74.9,
	isFound: false
},
{
	name: 'Moutoa',
	lat: -40.5,
	long: 75.38333,
	isFound: false
},
{
	name: 'Moutohora',
	lat: -38.28333,
	long: 77.53333,
	isFound: false
},
{
	name: 'Mourea',
	lat: -38.04843,
	long: 76.32949,
	isFound: false
},
{
	name: 'Mount Stoker',
	lat: -45.6,
	long: 70.28333,
	isFound: false
},
{
	name: 'Mount Somers',
	lat: -43.71667,
	long: 71.4,
	isFound: false
},
{
	name: 'Mount Rex',
	lat: -36.63333,
	long: 74.45,
	isFound: false
},
{
	name: 'Mount Pleasant',
	lat: -41.33333,
	long: 73.96667,
	isFound: false
},
{
	name: 'Mount Pisa',
	lat: -44.91667,
	long: 69.26667,
	isFound: false
},
{
	name: 'Mount Linton',
	lat: -45.93333,
	long: 67.86667,
	isFound: false
},
{
	name: 'Mount Cargill',
	lat: -45.8,
	long: 70.56667,
	isFound: false
},
{
	name: 'Moumahaki',
	lat: -39.78333,
	long: 74.68333,
	isFound: false
},
{
	name: 'Moturoa',
	lat: -39.06428,
	long: 74.03563,
	isFound: false
},
{
	name: 'Motupipi',
	lat: -40.85,
	long: 72.85,
	isFound: false
},
{
	name: 'Motupiko',
	lat: -41.45,
	long: 72.8,
	isFound: false
},
{
	name: 'Motunui',
	lat: -38.98333,
	long: 74.3,
	isFound: false
},
{
	name: 'Motunau',
	lat: -42.96667,
	long: 72.96667,
	isFound: false
},
{
	name: 'Motumaoho',
	lat: -37.7,
	long: 75.45,
	isFound: false
},
{
	name: 'Motukarara',
	lat: -43.73333,
	long: 72.58333,
	isFound: false
},
{
	name: 'Motukaraka',
	lat: -35.36667,
	long: 73.5,
	isFound: false
},
{
	name: 'Motu',
	lat: -38.25,
	long: 77.55,
	isFound: false
},
{
	name: 'Moteo',
	lat: -39.5,
	long: 76.78333,
	isFound: false
},
{
	name: 'Motatau',
	lat: -35.48333,
	long: 74.03333,
	isFound: false
},
{
	name: 'Motairehe',
	lat: -36.11667,
	long: 75.36667,
	isFound: false
},
{
	name: 'Mossburn',
	lat: -45.66667,
	long: 68.25,
	isFound: false
},
{
	name: 'Morven',
	lat: -44.83333,
	long: 71.11667,
	isFound: false
},
{
	name: 'Morton Mains',
	lat: -46.33333,
	long: 68.65,
	isFound: false
},
{
	name: 'Morrisons',
	lat: -45.25,
	long: 70.48333,
	isFound: false
},
{
	name: 'Mornington',
	lat: -45.88333,
	long: 70.46667,
	isFound: false
},
{
	name: 'Morikau',
	lat: -39.56667,
	long: 75.1,
	isFound: false
},
{
	name: 'Morere',
	lat: -38.98333,
	long: 77.8,
	isFound: false
},
{
	name: 'Moonlight',
	lat: -45.41667,
	long: 70.33333,
	isFound: false
},
{
	name: 'Moneymore',
	lat: -46.16667,
	long: 69.9,
	isFound: false
},
{
	name: 'Momona',
	lat: -45.91667,
	long: 70.21667,
	isFound: false
},
{
	name: 'Molesworth',
	lat: -42.08333,
	long: 73.25,
	isFound: false
},
{
	name: 'Mokotua',
	lat: -46.45,
	long: 68.58333,
	isFound: false
},
{
	name: 'Mokoreta',
	lat: -46.43333,
	long: 69.06667,
	isFound: false
},
{
	name: 'Mokoia',
	lat: -39.63333,
	long: 74.36667,
	isFound: false
},
{
	name: 'Mokihinui',
	lat: -41.58333,
	long: 72.01667,
	isFound: false
},
{
	name: 'Mokauiti',
	lat: -38.58333,
	long: 75.16667,
	isFound: false
},
{
	name: 'Mokau',
	lat: -38.69743,
	long: 74.61923,
	isFound: false
},
{
	name: 'Mokai',
	lat: -38.53333,
	long: 75.9,
	isFound: false
},
{
	name: 'Mohaka',
	lat: -39.11667,
	long: 77.18333,
	isFound: false
},
{
	name: 'Moeroa',
	lat: -39.43333,
	long: 74.63333,
	isFound: false
},
{
	name: 'Moerewa',
	lat: -35.38333,
	long: 74.03333,
	isFound: false
},
{
	name: 'Moerangi',
	lat: -37.96667,
	long: 74.91667,
	isFound: false
},
{
	name: 'Moeraki',
	lat: -45.36667,
	long: 70.85,
	isFound: false
},
{
	name: 'Moengawahine',
	lat: -35.63333,
	long: 74.05,
	isFound: false
},
{
	name: 'Moeawatea',
	lat: -39.53333,
	long: 74.65,
	isFound: false
},
{
	name: 'Moeatoa',
	lat: -38.35,
	long: 74.76667,
	isFound: false
},
{
	name: 'Moawhango',
	lat: -39.58016,
	long: 75.86227,
	isFound: false
},
{
	name: 'Moanapuru',
	lat: -46.11667,
	long: 70.16667,
	isFound: false
},
{
	name: 'Moana',
	lat: -42.58333,
	long: 71.46667,
	isFound: false
},
{
	name: 'Moa Flat',
	lat: -45.63333,
	long: 69.35,
	isFound: false
},
{
	name: 'Moa Creek',
	lat: -45.2,
	long: 69.65,
	isFound: false
},
{
	name: 'Mititai',
	lat: -36.01667,
	long: 73.93333,
	isFound: false
},
{
	name: 'Mitimiti',
	lat: -35.41667,
	long: 73.26667,
	isFound: false
},
{
	name: 'Mitcham',
	lat: -43.75,
	long: 71.85,
	isFound: false
},
{
	name: 'Mirza',
	lat: -41.86667,
	long: 74.11667,
	isFound: false
},
{
	name: 'Miranda',
	lat: -37.2,
	long: 75.31667,
	isFound: false
},
{
	name: 'Mina',
	lat: -42.81667,
	long: 73.23333,
	isFound: false
},
{
	name: 'Millerton',
	lat: -41.63333,
	long: 71.86667,
	isFound: false
},
{
	name: 'Millers Flat',
	lat: -45.66311,
	long: 69.41169,
	isFound: false
},
{
	name: 'Milburn',
	lat: -46.08333,
	long: 170,
	isFound: false
},
{
	name: 'Miko',
	lat: -41.53333,
	long: 71.95,
	isFound: false
},
{
	name: 'Mihiwaka',
	lat: -45.8,
	long: 70.63333,
	isFound: false
},
{
	name: 'Midhirst',
	lat: -39.29336,
	long: 74.2667,
	isFound: false
},
{
	name: 'Middlemarch',
	lat: -45.51667,
	long: 70.11667,
	isFound: false
},
{
	name: 'Methven',
	lat: -43.63333,
	long: 71.65,
	isFound: false
},
{
	name: 'Merrivale',
	lat: -46.05,
	long: 67.83333,
	isFound: false
},
{
	name: 'Merrijigs',
	lat: -42.2,
	long: 71.88333,
	isFound: false
},
{
	name: 'Meremere',
	lat: -39.58333,
	long: 74.38333,
	isFound: false
},
{
	name: 'Mercer',
	lat: -37.27904,
	long: 75.04796,
	isFound: false
},
{
	name: 'Menzies Ferry',
	lat: -46.35,
	long: 68.81667,
	isFound: false
},
{
	name: 'Mendip Hills',
	lat: -42.61667,
	long: 73.28333,
	isFound: false
},
{
	name: 'Meeanee',
	lat: -39.5436,
	long: 76.88821,
	isFound: false
},
{
	name: 'Medbury',
	lat: -42.86667,
	long: 72.66667,
	isFound: false
},
{
	name: 'Mayfield',
	lat: -43.81667,
	long: 71.41667,
	isFound: false
},
{
	name: 'Maxwell',
	lat: -39.81667,
	long: 74.86667,
	isFound: false
},
{
	name: 'Mawheraiti',
	lat: -42.18333,
	long: 71.71667,
	isFound: false
},
{
	name: 'Mawaro',
	lat: -44.3,
	long: 70.88333,
	isFound: false
},
{
	name: 'Mauriceville West',
	lat: -40.76667,
	long: 75.68333,
	isFound: false
},
{
	name: 'Mauriceville',
	lat: -40.78333,
	long: 75.7,
	isFound: false
},
{
	name: 'Maungaturoto',
	lat: -36.1,
	long: 74.36667,
	isFound: false
},
{
	name: 'Maungatua',
	lat: -45.9,
	long: 70.15,
	isFound: false
},
{
	name: 'Maungatiro',
	lat: -44.63333,
	long: 70.61667,
	isFound: false
},
{
	name: 'Maungawera',
	lat: -44.63333,
	long: 69.2,
	isFound: false
},
{
	name: 'Maungatapere',
	lat: -35.75,
	long: 74.2,
	isFound: false
},
{
	name: 'Maungapohatu',
	lat: -38.57018,
	long: 77.09751,
	isFound: false
},
{
	name: 'Maungakaramea',
	lat: -35.85,
	long: 74.21667,
	isFound: false
},
{
	name: 'Mauku',
	lat: -37.2,
	long: 74.81667,
	isFound: false
},
{
	name: 'Matukuroa',
	lat: -39.68333,
	long: 74.53333,
	isFound: false
},
{
	name: 'Matiere',
	lat: -38.75,
	long: 75.1,
	isFound: false
},
{
	name: 'Matawhero',
	lat: -38.66667,
	long: 77.96667,
	isFound: false
},
{
	name: 'Matawai',
	lat: -38.35,
	long: 77.53333,
	isFound: false
},
{
	name: 'Matauri Bay',
	lat: -35.03333,
	long: 73.9,
	isFound: false
},
{
	name: 'Mataura Island',
	lat: -46.41667,
	long: 68.78333,
	isFound: false
},
{
	name: 'Matau',
	lat: -39.16121,
	long: 74.56351,
	isFound: false
},
{
	name: 'Matatoki',
	lat: -37.21667,
	long: 75.61667,
	isFound: false
},
{
	name: 'Matata',
	lat: -37.88333,
	long: 76.75,
	isFound: false
},
{
	name: 'Mataroa',
	lat: -39.65001,
	long: 75.72314,
	isFound: false
},
{
	name: 'Matariki',
	lat: -41.41667,
	long: 72.73333,
	isFound: false
},
{
	name: 'Matarawa',
	lat: -41.05,
	long: 75.45,
	isFound: false
},
{
	name: 'Matapu',
	lat: -39.48333,
	long: 74.23333,
	isFound: false
},
{
	name: 'Matapouri',
	lat: -35.56667,
	long: 74.5,
	isFound: false
},
{
	name: 'Matapihi',
	lat: -37.69056,
	long: 76.18833,
	isFound: false
},
{
	name: 'Matapara',
	lat: -38.21667,
	long: 75.55,
	isFound: false
},
{
	name: 'Matangirau',
	lat: -35.05,
	long: 73.78333,
	isFound: false
},
{
	name: 'Matangi',
	lat: -37.80483,
	long: 75.39518,
	isFound: false
},
{
	name: 'Matamau',
	lat: -40.14165,
	long: 76.15826,
	isFound: false
},
{
	name: 'Matakohe',
	lat: -36.13333,
	long: 74.18333,
	isFound: false
},
{
	name: 'Matakitaki',
	lat: -41.96667,
	long: 72.33333,
	isFound: false
},
{
	name: 'Matakanui',
	lat: -45.01667,
	long: 69.56667,
	isFound: false
},
{
	name: 'Matakana',
	lat: -36.35,
	long: 74.71667,
	isFound: false
},
{
	name: 'Matainui',
	lat: -43.26667,
	long: 70.36667,
	isFound: false
},
{
	name: 'Matahuru',
	lat: -37.43333,
	long: 75.33333,
	isFound: false
},
{
	name: 'Matahorua',
	lat: -39.16667,
	long: 76.93333,
	isFound: false
},
{
	name: 'Matahiwi Landing',
	lat: -39.63333,
	long: 75.16667,
	isFound: false
},
{
	name: 'Matahiwi',
	lat: -39.6,
	long: 75.15,
	isFound: false
},
{
	name: 'Matahina',
	lat: -38.25,
	long: 76.83333,
	isFound: false
},
{
	name: 'Matahanea',
	lat: -38.11667,
	long: 77.26667,
	isFound: false
},
{
	name: 'Mata',
	lat: -35.85,
	long: 74.36667,
	isFound: false
},
{
	name: 'Masons Flat',
	lat: -42.9,
	long: 72.55,
	isFound: false
},
{
	name: 'Maruia Springs',
	lat: -42.38333,
	long: 72.33333,
	isFound: false
},
{
	name: 'Maruia',
	lat: -42.18333,
	long: 72.21667,
	isFound: false
},
{
	name: 'Marua',
	lat: -35.56667,
	long: 74.36667,
	isFound: false
},
{
	name: 'Marsden Point',
	lat: -35.83333,
	long: 74.5,
	isFound: false
},
{
	name: 'Marsden',
	lat: -42.56667,
	long: 71.21667,
	isFound: false
},
{
	name: 'Marotiri',
	lat: -40.48333,
	long: 75.35,
	isFound: false
},
{
	name: 'Maropiu',
	lat: -35.8,
	long: 73.73333,
	isFound: false
},
{
	name: 'Maromaku',
	lat: -35.48333,
	long: 74.08333,
	isFound: false
},
{
	name: 'Marokopa',
	lat: -38.3,
	long: 74.73333,
	isFound: false
},
{
	name: 'Marohemo',
	lat: -36.18333,
	long: 74.3,
	isFound: false
},
{
	name: 'Marlow',
	lat: -35.53333,
	long: 74.1,
	isFound: false
},
{
	name: 'Market Cross',
	lat: -41.25,
	long: 72.13333,
	isFound: false
},
{
	name: 'Mareretu',
	lat: -36.03333,
	long: 74.26667,
	isFound: false
},
{
	name: 'Mararewa',
	lat: -41.41667,
	long: 72.83333,
	isFound: false
},
{
	name: 'Marangai',
	lat: -35.33333,
	long: 73.71667,
	isFound: false
},
{
	name: 'Maramarua',
	lat: -37.25,
	long: 75.23333,
	isFound: false
},
{
	name: 'Marakerake',
	lat: -45.06667,
	long: 70.75,
	isFound: false
},
{
	name: 'Maraetai',
	lat: -36.88333,
	long: 75.05,
	isFound: false
},
{
	name: 'Maraeroa',
	lat: -35.33333,
	long: 73.63333,
	isFound: false
},
{
	name: 'Maraekakaho',
	lat: -39.65,
	long: 76.63333,
	isFound: false
},
{
	name: 'Maraehoko',
	lat: -42.66667,
	long: 71.03333,
	isFound: false
},
{
	name: 'Mapua',
	lat: -41.25,
	long: 73.1,
	isFound: false
},
{
	name: 'Mapiu',
	lat: -38.58333,
	long: 75.21667,
	isFound: false
},
{
	name: 'Maori Point',
	lat: -44.86667,
	long: 68.68333,
	isFound: false
},
{
	name: 'Manutuke',
	lat: -38.68333,
	long: 77.91667,
	isFound: false
},
{
	name: 'Manutahi',
	lat: -39.66667,
	long: 74.4,
	isFound: false
},
{
	name: 'Manunui',
	lat: -38.88333,
	long: 75.33333,
	isFound: false
},
{
	name: 'Manukau City',
	lat: -36.99282,
	long: 74.87986,
	isFound: false
},
{
	name: 'Manukau',
	lat: -35.23333,
	long: 73.21667,
	isFound: false
},
{
	name: 'Manuka Creek',
	lat: -46.06667,
	long: 69.81667,
	isFound: false
},
{
	name: 'Maniatutu',
	lat: -37.81667,
	long: 76.45,
	isFound: false
},
{
	name: 'Mangorei',
	lat: -39.15,
	long: 74.08333,
	isFound: false
},
{
	name: 'Mangonui',
	lat: -34.99049,
	long: 73.53171,
	isFound: false
},
{
	name: 'Mangere',
	lat: -36.96807,
	long: 74.79875,
	isFound: false
},
{
	name: 'Mangawhio',
	lat: -39.71667,
	long: 74.71667,
	isFound: false
},
{
	name: 'Mangawhata',
	lat: -40.4,
	long: 75.43333,
	isFound: false
},
{
	name: 'Mangawhai',
	lat: -36.11667,
	long: 74.56667,
	isFound: false
},
{
	name: 'Mangaweka',
	lat: -39.80943,
	long: 75.78876,
	isFound: false
},
{
	name: 'Mangatu',
	lat: -35.7,
	long: 73.63333,
	isFound: false
},
{
	name: 'Mangatoki',
	lat: -39.41667,
	long: 74.21667,
	isFound: false
},
{
	name: 'Mangatiti',
	lat: -40.54668,
	long: 76.12277,
	isFound: false
},
{
	name: 'Mangatawhiri',
	lat: -37.21529,
	long: 75.12293,
	isFound: false
},
{
	name: 'Mangatarata',
	lat: -37.3,
	long: 75.36667,
	isFound: false
},
{
	name: 'Mangatangi',
	lat: -37.20124,
	long: 75.19893,
	isFound: false
},
{
	name: 'Mangatainoka',
	lat: -40.41513,
	long: 75.86352,
	isFound: false
},
{
	name: 'Mangaroa',
	lat: -41.11667,
	long: 75.11667,
	isFound: false
},
{
	name: 'Mangarata',
	lat: -41.73333,
	long: 72.4,
	isFound: false
},
{
	name: 'Mangapurua',
	lat: -39.21667,
	long: 75.1,
	isFound: false
},
{
	name: 'Mangapani',
	lat: -39.75,
	long: 74.83333,
	isFound: false
},
{
	name: 'Mangapai',
	lat: -35.85,
	long: 74.28333,
	isFound: false
},
{
	name: 'Mangaonoho',
	lat: -39.88705,
	long: 75.65418,
	isFound: false
},
{
	name: 'Mangaone',
	lat: -40.52717,
	long: 75.85976,
	isFound: false
},
{
	name: 'Mangaohutu',
	lat: -39.06667,
	long: 75.11667,
	isFound: false
},
{
	name: 'Mangamutu',
	lat: -40.44776,
	long: 75.81584,
	isFound: false
},
{
	name: 'Mangamuka',
	lat: -35.21667,
	long: 73.55,
	isFound: false
},
{
	name: 'Mangamingi',
	lat: -39.41667,
	long: 74.43333,
	isFound: false
},
{
	name: 'Mangamaunu',
	lat: -42.29783,
	long: 73.74793,
	isFound: false
},
{
	name: 'Mangamaire',
	lat: -40.51716,
	long: 75.75263,
	isFound: false
},
{
	name: 'Mangamahu',
	lat: -39.81667,
	long: 75.36667,
	isFound: false
},
{
	name: 'Mangamahoe',
	lat: -40.73333,
	long: 75.71667,
	isFound: false
},
{
	name: 'Mangaiti',
	lat: -37.5,
	long: 75.68333,
	isFound: false
},
{
	name: 'Mandeville North',
	lat: -43.38333,
	long: 72.53333,
	isFound: false
},
{
	name: 'Mandeville',
	lat: -46,
	long: 168.81667,
	isFound: false
},
{
	name: 'Manawaru',
	lat: -37.63333,
	long: 75.76667,
	isFound: false
},
{
	name: 'Manawaora',
	lat: -35.28333,
	long: 74.2,
	isFound: false
},
{
	name: 'Manawahe',
	lat: -38,
	long: 176.63333,
	isFound: false
},
{
	name: 'Manaroa',
	lat: -41.11667,
	long: 74.03333,
	isFound: false
},
{
	name: 'Manapouri',
	lat: -45.56695,
	long: 67.61154,
	isFound: false
},
{
	name: 'Manakau',
	lat: -40.71667,
	long: 75.21667,
	isFound: false
},
{
	name: 'Manaia',
	lat: -39.55,
	long: 74.13333,
	isFound: false
},
{
	name: 'Mamaranui',
	lat: -35.83333,
	long: 73.75,
	isFound: false
},
{
	name: 'Mamaku',
	lat: -38.1,
	long: 76.08333,
	isFound: false
},
{
	name: 'Makuri',
	lat: -40.53333,
	long: 76.01667,
	isFound: false
},
{
	name: 'Makotuku',
	lat: -40.12065,
	long: 76.2319,
	isFound: false
},
{
	name: 'Makirikiri',
	lat: -39.86667,
	long: 75.11667,
	isFound: false
},
{
	name: 'Makikihi',
	lat: -44.63333,
	long: 71.15,
	isFound: false
},
{
	name: 'Maketu',
	lat: -37.76667,
	long: 76.45,
	isFound: false
},
{
	name: 'Makeokeo',
	lat: -38.03333,
	long: 75.13333,
	isFound: false
},
{
	name: 'Makauri',
	lat: -38.63333,
	long: 77.95,
	isFound: false
},
{
	name: 'Makarora Wharf',
	lat: -44.31667,
	long: 69.18333,
	isFound: false
},
{
	name: 'Makarora',
	lat: -44.23333,
	long: 69.23333,
	isFound: false
},
{
	name: 'Makarewa Junction',
	lat: -46.3,
	long: 68.33333,
	isFound: false
},
{
	name: 'Makarewa',
	lat: -46.33333,
	long: 68.35,
	isFound: false
},
{
	name: 'Makaretu',
	lat: -39.91667,
	long: 76.26667,
	isFound: false
},
{
	name: 'Makarau',
	lat: -36.55,
	long: 74.5,
	isFound: false
},
{
	name: 'Makaraka',
	lat: -38.65,
	long: 77.96667,
	isFound: false
},
{
	name: 'Maitland',
	lat: -45.98333,
	long: 69.01667,
	isFound: false
},
{
	name: 'Maitahi',
	lat: -35.85,
	long: 73.76667,
	isFound: false
},
{
	name: 'Mairoa',
	lat: -38.36667,
	long: 74.98333,
	isFound: false
},
{
	name: 'Mairangi Bay',
	lat: -36.73806,
	long: 74.75201,
	isFound: false
},
{
	name: 'Maimai',
	lat: -42.15,
	long: 71.75,
	isFound: false
},
{
	name: 'Maihiihi',
	lat: -38.23333,
	long: 75.38333,
	isFound: false
},
{
	name: 'Mahuta',
	lat: -37.58333,
	long: 75.08333,
	isFound: false
},
{
	name: 'Mahurangi',
	lat: -36.48333,
	long: 74.73333,
	isFound: false
},
{
	name: 'Mahunga',
	lat: -42.38333,
	long: 73.43333,
	isFound: false
},
{
	name: 'Mahoenui',
	lat: -38.56667,
	long: 74.85,
	isFound: false
},
{
	name: 'Mahoe',
	lat: -39.37719,
	long: 74.17231,
	isFound: false
},
{
	name: 'Mahitahi',
	lat: -43.65,
	long: 69.6,
	isFound: false
},
{
	name: 'Mahia Beach',
	lat: -39.08351,
	long: 77.87427,
	isFound: false
},
{
	name: 'Mahia',
	lat: -39.08724,
	long: 77.91723,
	isFound: false
},
{
	name: 'Mahers Creek',
	lat: -42.18333,
	long: 71.33333,
	isFound: false
},
{
	name: 'Maheno',
	lat: -45.16667,
	long: 70.83333,
	isFound: false
},
{
	name: 'Maharakeke',
	lat: -40.01667,
	long: 76.45,
	isFound: false
},
{
	name: 'Maharahara',
	lat: -40.26034,
	long: 75.95514,
	isFound: false
},
{
	name: 'Mahana',
	lat: -41.26667,
	long: 73.05,
	isFound: false
},
{
	name: 'Mahakipawa',
	lat: -41.28333,
	long: 73.86667,
	isFound: false
},
{
	name: 'Maerewhenua',
	lat: -44.91249,
	long: 70.6139,
	isFound: false
},
{
	name: 'Macraes Flat',
	lat: -45.38333,
	long: 70.43333,
	isFound: false
},
{
	name: 'Maclennan',
	lat: -46.55,
	long: 69.48333,
	isFound: false
},
{
	name: 'Mackaytown',
	lat: -37.41667,
	long: 75.7,
	isFound: false
},
{
	name: 'Macetown',
	lat: -44.86667,
	long: 68.83333,
	isFound: false
},
{
	name: 'Macandrew Bay',
	lat: -45.86667,
	long: 70.6,
	isFound: false
},
{
	name: 'Mabel School',
	lat: -46.3,
	long: 68.53333,
	isFound: false
},
{
	name: 'Mabel Bush',
	lat: -46.28333,
	long: 68.53333,
	isFound: false
},
{
	name: 'Lynnford',
	lat: -44.01667,
	long: 71.6,
	isFound: false
},
{
	name: 'Lyndhurst',
	lat: -43.7,
	long: 71.71667,
	isFound: false
},
{
	name: 'Lyell',
	lat: -41.8,
	long: 72.05,
	isFound: false
},
{
	name: 'Lyalldale',
	lat: -44.5,
	long: 71.08333,
	isFound: false
},
{
	name: 'Lumsden',
	lat: -45.73333,
	long: 68.45,
	isFound: false
},
{
	name: 'Luggate',
	lat: -44.75,
	long: 69.26667,
	isFound: false
},
{
	name: 'Lowther',
	lat: -45.66667,
	long: 68.43333,
	isFound: false
},
{
	name: 'Lowgarth',
	lat: -39.38788,
	long: 74.21557,
	isFound: false
},
{
	name: 'Lower Waiawa',
	lat: -38.01667,
	long: 77.41667,
	isFound: false
},
{
	name: 'Lower Shotover',
	lat: -44.98333,
	long: 68.76667,
	isFound: false
},
{
	name: 'Lower Kokatahi',
	lat: -42.83333,
	long: 71.03333,
	isFound: false
},
{
	name: 'Lower Kohumaru',
	lat: -35.06667,
	long: 73.55,
	isFound: false
},
{
	name: 'Lower Kaimai',
	lat: -37.8,
	long: 76.03333,
	isFound: false
},
{
	name: 'Lower Hutt',
	lat: -41.21667,
	long: 74.91667,
	isFound: false
},
{
	name: 'Lowcliffe',
	lat: -44.11667,
	long: 71.58333,
	isFound: false
},
{
	name: 'Lowburn Ferry',
	lat: -45.01667,
	long: 69.21667,
	isFound: false
},
{
	name: 'Lovells Flat',
	lat: -46.16667,
	long: 69.83333,
	isFound: false
},
{
	name: 'Lorneville',
	lat: -46.35,
	long: 68.35,
	isFound: false
},
{
	name: 'Longwood',
	lat: -46.34527,
	long: 67.95426,
	isFound: false
},
{
	name: 'Longridge',
	lat: -45.86667,
	long: 68.65,
	isFound: false
},
{
	name: 'Long Gully',
	lat: -44.91667,
	long: 68.68333,
	isFound: false
},
{
	name: 'Longford',
	lat: -41.78333,
	long: 72.36667,
	isFound: false
},
{
	name: 'Longbush',
	lat: -46.38333,
	long: 68.5,
	isFound: false
},
{
	name: 'Longburn',
	lat: -40.38395,
	long: 75.5429,
	isFound: false
},
{
	name: 'Longbeach',
	lat: -44.09138,
	long: 71.68597,
	isFound: false
},
{
	name: 'Te Oka',
	lat: -43.845,
	long: 72.789,
	isFound: false
},
{
	name: 'Lochiel',
	lat: -46.2,
	long: 68.33333,
	isFound: false
},
{
	name: 'Loburn',
	lat: -43.25,
	long: 72.53333,
	isFound: false
},
{
	name: 'Livingstone',
	lat: -44.96667,
	long: 70.58333,
	isFound: false
},
{
	name: 'Little Wanganui',
	lat: -41.4,
	long: 72.06667,
	isFound: false
},
{
	name: 'Little River',
	lat: -43.76667,
	long: 72.78333,
	isFound: false
},
{
	name: 'Little Akaloa',
	lat: -43.68333,
	long: 72.98333,
	isFound: false
},
{
	name: 'Lismore',
	lat: -43.9,
	long: 71.48333,
	isFound: false
},
{
	name: 'Linton',
	lat: -40.43333,
	long: 75.55,
	isFound: false
},
{
	name: 'Lindis Pass',
	lat: -44.7,
	long: 69.5,
	isFound: false
},
{
	name: 'Lindis Crossing',
	lat: -44.88333,
	long: 69.38333,
	isFound: false
},
{
	name: 'Linden',
	lat: -41.16667,
	long: 74.83333,
	isFound: false
},
{
	name: 'Lincoln',
	lat: -43.65,
	long: 72.48333,
	isFound: false
},
{
	name: 'Limehills',
	lat: -46.06667,
	long: 68.33333,
	isFound: false
},
{
	name: 'Levels',
	lat: -44.33333,
	long: 71.21667,
	isFound: false
},
{
	name: 'Lepperton',
	lat: -39.06667,
	long: 74.21667,
	isFound: false
},
{
	name: 'Leithfield',
	lat: -43.2,
	long: 72.73333,
	isFound: false
},
{
	name: 'Leigh',
	lat: -36.28333,
	long: 74.81667,
	isFound: false
},
{
	name: 'Lee Stream',
	lat: -45.8,
	long: 70.11667,
	isFound: false
},
{
	name: 'Leeston',
	lat: -43.76667,
	long: 72.3,
	isFound: false
},
{
	name: 'Le Bons Bay',
	lat: -43.75,
	long: 73.08333,
	isFound: false
},
{
	name: 'Leamington',
	lat: -37.88333,
	long: 75.46667,
	isFound: false
},
{
	name: 'Lauriston',
	lat: -43.73333,
	long: 71.78333,
	isFound: false
},
{
	name: 'Lauder',
	lat: -45.05,
	long: 69.66667,
	isFound: false
},
{
	name: 'Langridge',
	lat: -41.98333,
	long: 73.41667,
	isFound: false
},
{
	name: 'Lake Tekapo',
	lat: -44.00641,
	long: 70.48033,
	isFound: false
},
{
	name: 'Lake Rotoroa',
	lat: -41.8,
	long: 72.6,
	isFound: false
},
{
	name: 'Lake Pukaki',
	lat: -44.18333,
	long: 70.15,
	isFound: false
},
{
	name: 'Lake Ohia',
	lat: -34.98333,
	long: 73.36667,
	isFound: false
},
{
	name: 'Lake Kaniere',
	lat: -42.8,
	long: 71.13333,
	isFound: false
},
{
	name: 'Lake Coleridge',
	lat: -43.36667,
	long: 71.53333,
	isFound: false
},
{
	name: 'Lagmhor',
	lat: -43.88333,
	long: 71.63333,
	isFound: false
},
{
	name: 'Lady Barkly',
	lat: -46.1,
	long: 68.33333,
	isFound: false
},
{
	name: 'Ladbrooks',
	lat: -43.61667,
	long: 72.53333,
	isFound: false
},
{
	name: 'Kyle',
	lat: -43.91667,
	long: 72.1,
	isFound: false
},
{
	name: 'Kyeburn',
	lat: -45.15,
	long: 70.25,
	isFound: false
},
{
	name: 'Kurow',
	lat: -44.73341,
	long: 70.46962,
	isFound: false
},
{
	name: 'Kuri Bush',
	lat: -46.02474,
	long: 70.22968,
	isFound: false
},
{
	name: 'Kumeu',
	lat: -36.76667,
	long: 74.56667,
	isFound: false
},
{
	name: 'Kumeroa',
	lat: -40.34295,
	long: 75.98892,
	isFound: false
},
{
	name: 'Kuaotunu',
	lat: -36.71667,
	long: 75.73333,
	isFound: false
},
{
	name: 'Kowhitirangi',
	lat: -42.86667,
	long: 71.01667,
	isFound: false
},
{
	name: 'Kowhatu',
	lat: -44.56667,
	long: 70.66667,
	isFound: false
},
{
	name: 'Kowai Bush',
	lat: -43.3,
	long: 71.91667,
	isFound: false
},
{
	name: 'Koutu',
	lat: -38.11974,
	long: 76.23834,
	isFound: false
},
{
	name: 'Koutu',
	lat: -35.46667,
	long: 73.41667,
	isFound: false
},
{
	name: 'Kotuku',
	lat: -42.55,
	long: 71.46667,
	isFound: false
},
{
	name: 'Kotemaori',
	lat: -39.06667,
	long: 77.03333,
	isFound: false
},
{
	name: 'Koromiko',
	lat: -41.35,
	long: 73.95,
	isFound: false
},
{
	name: 'Korokoro',
	lat: -41.21667,
	long: 74.86667,
	isFound: false
},
{
	name: 'Korito',
	lat: -39.16667,
	long: 74.1,
	isFound: false
},
{
	name: 'Koriniti',
	lat: -39.66667,
	long: 75.16667,
	isFound: false
},
{
	name: 'Korere Valley',
	lat: -41.51667,
	long: 72.8,
	isFound: false
},
{
	name: 'Korere',
	lat: -41.53333,
	long: 72.8,
	isFound: false
},
{
	name: 'Kopuaranga',
	lat: -40.83333,
	long: 75.66667,
	isFound: false
},
{
	name: 'Kopua',
	lat: -40.08392,
	long: 76.28559,
	isFound: false
},
{
	name: 'Kopu',
	lat: -37.18333,
	long: 75.56667,
	isFound: false
},
{
	name: 'Kopaki',
	lat: -38.46667,
	long: 75.26667,
	isFound: false
},
{
	name: 'Kononi',
	lat: -45.96141,
	long: 69.5223,
	isFound: false
},
{
	name: 'Korakonui',
	lat: -38.16667,
	long: 75.43333,
	isFound: false
},
{
	name: 'Koraki',
	lat: -39.28333,
	long: 76.85,
	isFound: false
},
{
	name: 'Koputaroa',
	lat: -40.57785,
	long: 75.33836,
	isFound: false
},
{
	name: 'Kopuriki',
	lat: -38.33333,
	long: 76.78333,
	isFound: false
},
{
	name: 'Kopuku',
	lat: -37.28333,
	long: 75.16667,
	isFound: false
},
{
	name: 'Konini',
	lat: -40.50457,
	long: 75.79155,
	isFound: false
},
{
	name: 'Kongahu',
	lat: -41.3,
	long: 72.1,
	isFound: false
},
{
	name: 'Komiti',
	lat: -35.05,
	long: 73.5,
	isFound: false
},
{
	name: 'Komata North',
	lat: -37.33333,
	long: 75.66667,
	isFound: false
},
{
	name: 'Komata',
	lat: -37.36667,
	long: 75.73333,
	isFound: false
},
{
	name: 'Komakorau',
	lat: -37.63333,
	long: 75.26667,
	isFound: false
},
{
	name: 'Kokopu',
	lat: -35.7,
	long: 74.13333,
	isFound: false
},
{
	name: 'Kokonga',
	lat: -45.21667,
	long: 70.25,
	isFound: false
},
{
	name: 'Kokiri',
	lat: -42.5,
	long: 71.38333,
	isFound: false
},
{
	name: 'Kokapo',
	lat: -36.28333,
	long: 74.46667,
	isFound: false
},
{
	name: 'Kokakoriki',
	lat: -39.03333,
	long: 75.11667,
	isFound: false
},
{
	name: 'Kohuratahi',
	lat: -39.0899,
	long: 74.77441,
	isFound: false
},
{
	name: 'Kohumaru',
	lat: -35.06667,
	long: 73.53333,
	isFound: false
},
{
	name: 'Kohukohu',
	lat: -35.35,
	long: 73.53333,
	isFound: false
},
{
	name: 'Kohekohe',
	lat: -37.18333,
	long: 74.65,
	isFound: false
},
{
	name: 'Knapdale',
	lat: -46.01667,
	long: 68.91667,
	isFound: false
},
{
	name: 'Kiwitea',
	lat: -40.11667,
	long: 75.73333,
	isFound: false
},
{
	name: 'Kiwitahi',
	lat: -37.7,
	long: 75.6,
	isFound: false
},
{
	name: 'Kiwi',
	lat: -41.5,
	long: 72.75,
	isFound: false
},
{
	name: 'Kiteroa',
	lat: -45.7,
	long: 70.25,
	isFound: false
},
{
	name: 'Kirwee',
	lat: -43.5,
	long: 72.21667,
	isFound: false
},
{
	name: 'Kiritehere',
	lat: -38.33333,
	long: 74.73333,
	isFound: false
},
{
	name: 'Kiritaki',
	lat: -40.23921,
	long: 75.98269,
	isFound: false
},
{
	name: 'Kiripaka',
	lat: -35.63333,
	long: 74.43333,
	isFound: false
},
{
	name: 'Kirikopuni',
	lat: -35.81667,
	long: 74.01667,
	isFound: false
},
{
	name: 'Kirikau',
	lat: -39.01667,
	long: 75.13333,
	isFound: false
},
{
	name: 'Kioreroa',
	lat: -35.73333,
	long: 74.35,
	isFound: false
},
{
	name: 'Kinohaku',
	lat: -38.15,
	long: 74.83333,
	isFound: false
},
{
	name: 'Kinloch',
	lat: -44.8426,
	long: 68.34814,
	isFound: false
},
{
	name: 'Kinleith',
	lat: -38.28333,
	long: 75.9,
	isFound: false
},
{
	name: 'Kingston',
	lat: -45.33288,
	long: 68.71476,
	isFound: false
},
{
	name: 'Kingsdown',
	lat: -44.46667,
	long: 71.21667,
	isFound: false
},
{
	name: 'Kimihia',
	lat: -37.51667,
	long: 75.16667,
	isFound: false
},
{
	name: 'Kimbolton',
	lat: -40.05548,
	long: 75.77936,
	isFound: false
},
{
	name: 'Kimbell',
	lat: -44.05,
	long: 70.75,
	isFound: false
},
{
	name: 'Killinchy',
	lat: -43.73333,
	long: 72.25,
	isFound: false
},
{
	name: 'Kilbirnie',
	lat: -41.31824,
	long: 74.79506,
	isFound: false
},
{
	name: 'Kikiwa',
	lat: -41.65,
	long: 72.86667,
	isFound: false
},
{
	name: 'Kihikihi',
	lat: -38.03333,
	long: 75.35,
	isFound: false
},
{
	name: 'Khandallah',
	lat: -41.245,
	long: 74.79422,
	isFound: false
},
{
	name: 'Kerrytown',
	lat: -44.28333,
	long: 71.2,
	isFound: false
},
{
	name: 'Kerikeri Inlet',
	lat: -35.2,
	long: 74.03333,
	isFound: false
},
{
	name: 'Kerikeri',
	lat: -35.22676,
	long: 73.94739,
	isFound: false
},
{
	name: 'Kereta',
	lat: -36.86667,
	long: 75.41667,
	isFound: false
},
{
	name: 'Kerepehi',
	lat: -37.3,
	long: 75.53333,
	isFound: false
},
{
	name: 'Kent Road',
	lat: -39.13333,
	long: 74.11667,
	isFound: false
},
{
	name: 'Kennington',
	lat: -46.4,
	long: 68.45,
	isFound: false
},
{
	name: 'Kennedys Bay',
	lat: -36.68333,
	long: 75.55,
	isFound: false
},
{
	name: 'Kenepuru Head',
	lat: -41.16667,
	long: 74.11667,
	isFound: false
},
{
	name: 'Kenana',
	lat: -35.05,
	long: 73.56667,
	isFound: false
},
{
	name: 'Kelvin Grove',
	lat: -40.32875,
	long: 75.64512,
	isFound: false
},
{
	name: 'Kelso',
	lat: -45.9,
	long: 69.23333,
	isFound: false
},
{
	name: 'Kelchers',
	lat: -44.78333,
	long: 70.85,
	isFound: false
},
{
	name: 'Kekerengu',
	lat: -42.00122,
	long: 74.00773,
	isFound: false
},
{
	name: 'Kawiti',
	lat: -35.41667,
	long: 73.95,
	isFound: false
},
{
	name: 'Kawhia',
	lat: -38.06667,
	long: 74.81667,
	isFound: false
},
{
	name: 'Kawerau',
	lat: -38.1,
	long: 76.7,
	isFound: false
},
{
	name: 'Kaweku',
	lat: -45.93333,
	long: 68.7,
	isFound: false
},
{
	name: 'Kawau Island',
	lat: -36.41667,
	long: 74.85,
	isFound: false
},
{
	name: 'Kawatiri',
	lat: -41.7,
	long: 72.6,
	isFound: false
},
{
	name: 'Kawakawa',
	lat: -35.38333,
	long: 74.06667,
	isFound: false
},
{
	name: 'Kauwhata',
	lat: -40.3,
	long: 75.53333,
	isFound: false
},
{
	name: 'Kauru Hill',
	lat: -45.1,
	long: 70.75,
	isFound: false
},
{
	name: 'Kauroa',
	lat: -37.83333,
	long: 74.93333,
	isFound: false
},
{
	name: 'Kauri',
	lat: -35.63333,
	long: 74.3,
	isFound: false
},
{
	name: 'Kaupokonui',
	lat: -39.55,
	long: 74.06667,
	isFound: false
},
{
	name: 'Kaukapakapa',
	lat: -36.61667,
	long: 74.5,
	isFound: false
},
{
	name: 'Kauhoe',
	lat: -45.73333,
	long: 68.66667,
	isFound: false
},
{
	name: 'Kauangaroa',
	lat: -39.92438,
	long: 75.28292,
	isFound: false
},
{
	name: 'Kauaeranga',
	lat: -37.16667,
	long: 75.58333,
	isFound: false
},
{
	name: 'Katiki',
	lat: -45.4,
	long: 70.83333,
	isFound: false
},
{
	name: 'Katikati',
	lat: -37.55,
	long: 75.91667,
	isFound: false
},
{
	name: 'Katea',
	lat: -46.41667,
	long: 69.63333,
	isFound: false
},
{
	name: 'Karori',
	lat: -41.28374,
	long: 74.74141,
	isFound: false
},
{
	name: 'Karitane',
	lat: -45.64021,
	long: 70.65772,
	isFound: false
},
{
	name: 'Karioi',
	lat: -39.45,
	long: 75.51667,
	isFound: false
},
{
	name: 'Karewarewa',
	lat: -39.86667,
	long: 75.95,
	isFound: false
},
{
	name: 'Karetu',
	lat: -35.36667,
	long: 74.15,
	isFound: false
},
{
	name: 'Karekare',
	lat: -36.98333,
	long: 74.48333,
	isFound: false
},
{
	name: 'Karangarua',
	lat: -43.53333,
	long: 69.81667,
	isFound: false
},
{
	name: 'Karangahake',
	lat: -37.43333,
	long: 75.71667,
	isFound: false
},
{
	name: 'Karamu',
	lat: -37.88333,
	long: 75.13333,
	isFound: false
},
{
	name: 'Karamea',
	lat: -41.25,
	long: 72.11667,
	isFound: false
},
{
	name: 'Kapuni',
	lat: -39.48333,
	long: 74.13333,
	isFound: false
},
{
	name: 'Kapuka',
	lat: -46.46667,
	long: 68.63333,
	isFound: false
},
{
	name: 'Kapowai',
	lat: -40.9,
	long: 73.83333,
	isFound: false
},
{
	name: 'Kaponga',
	lat: -39.43333,
	long: 74.15,
	isFound: false
},
{
	name: 'Kapara',
	lat: -39.53333,
	long: 74.75,
	isFound: false
},
{
	name: 'Kanohi',
	lat: -36.58333,
	long: 74.51667,
	isFound: false
},
{
	name: 'Kamo',
	lat: -35.68333,
	long: 74.31667,
	isFound: false
},
{
	name: 'Kamaka',
	lat: -42.43333,
	long: 71.38333,
	isFound: false
},
{
	name: 'Kamahi',
	lat: -46.33333,
	long: 68.71667,
	isFound: false
},
{
	name: 'Kakatahi',
	lat: -39.68333,
	long: 75.33333,
	isFound: false
},
{
	name: 'Kakaramea',
	lat: -39.71667,
	long: 74.45,
	isFound: false
},
{
	name: 'Kakapuaka',
	lat: -46.26667,
	long: 69.71667,
	isFound: false
},
{
	name: 'Kakapotahi',
	lat: -42.98333,
	long: 70.7,
	isFound: false
},
{
	name: 'Kaka Point',
	lat: -46.38333,
	long: 69.78333,
	isFound: false
},
{
	name: 'Kakapo Bay',
	lat: -41.33333,
	long: 74.11667,
	isFound: false
},
{
	name: 'Kakanui',
	lat: -45.18333,
	long: 70.9,
	isFound: false
},
{
	name: 'Kakahu Bush',
	lat: -44.15,
	long: 71.11667,
	isFound: false
},
{
	name: 'Kakahi',
	lat: -38.91667,
	long: 75.38333,
	isFound: false
},
{
	name: 'Kaiwharawhara',
	lat: -41.26667,
	long: 74.78333,
	isFound: false
},
{
	name: 'Kaiwaka',
	lat: -36.16667,
	long: 74.45,
	isFound: false
},
{
	name: 'Kaiuma',
	lat: -41.23333,
	long: 73.76667,
	isFound: false
},
{
	name: 'Kaituna',
	lat: -41.46667,
	long: 73.78333,
	isFound: false
},
{
	name: 'Kaituna',
	lat: -41.46667,
	long: 73.8,
	isFound: false
},
{
	name: 'Kaitoke',
	lat: -41.08333,
	long: 75.16667,
	isFound: false
},
{
	name: 'Kaitieke',
	lat: -39.1,
	long: 75.26667,
	isFound: false
},
{
	name: 'Kaitawa',
	lat: -40.49657,
	long: 75.89,
	isFound: false
},
{
	name: 'Kaitaratahi',
	lat: -38.53333,
	long: 77.91667,
	isFound: false
},
{
	name: 'Kairuru',
	lat: -41.03333,
	long: 72.93333,
	isFound: false
},
{
	name: 'Kairua',
	lat: -37.71667,
	long: 76.28333,
	isFound: false
},
{
	name: 'Kairara',
	lat: -35.8,
	long: 73.81667,
	isFound: false
},
{
	name: 'Kairanga',
	lat: -40.35,
	long: 75.53333,
	isFound: false
},
{
	name: 'Kaipara Flats',
	lat: -36.41667,
	long: 74.55,
	isFound: false
},
{
	name: 'Kaipaki',
	lat: -37.93333,
	long: 75.36667,
	isFound: false
},
{
	name: 'Kaingaroa',
	lat: -35.03333,
	long: 73.33333,
	isFound: false
},
{
	name: 'Kaingapai',
	lat: -44.6,
	long: 70.56667,
	isFound: false
},
{
	name: 'Kaimiro',
	lat: -39.2,
	long: 74.15,
	isFound: false
},
{
	name: 'Kaimaumau',
	lat: -34.91667,
	long: 73.26667,
	isFound: false
},
{
	name: 'Kaimata',
	lat: -39.16667,
	long: 74.3,
	isFound: false
},
{
	name: 'Kaimai',
	lat: -37.83333,
	long: 75.96667,
	isFound: false
},
{
	name: 'Kaikoura',
	lat: -42.41667,
	long: 73.68333,
	isFound: false
},
{
	name: 'Kaikou',
	lat: -35.55,
	long: 73.95,
	isFound: false
},
{
	name: 'Kaikarangi',
	lat: -39.90187,
	long: 75.60259,
	isFound: false
},
{
	name: 'Kai Iwi',
	lat: -39.85,
	long: 74.93333,
	isFound: false
},
{
	name: 'Kaihu',
	lat: -35.76667,
	long: 73.7,
	isFound: false
},
{
	name: 'Kaihinu',
	lat: -42.68333,
	long: 71.01667,
	isFound: false
},
{
	name: 'Kaihiku',
	lat: -46.23333,
	long: 69.55,
	isFound: false
},
{
	name: 'Kaihere',
	lat: -37.36667,
	long: 75.43333,
	isFound: false
},
{
	name: 'Kaiaua',
	lat: -37.11112,
	long: 75.29622,
	isFound: false
},
{
	name: 'Kaiata',
	lat: -42.46667,
	long: 71.25,
	isFound: false
},
{
	name: 'Kaiaka',
	lat: -35.1,
	long: 73.41667,
	isFound: false
},
{
	name: 'Kahutara',
	lat: -41.23333,
	long: 75.33333,
	isFound: false
},
{
	name: 'Kahuika',
	lat: -46.51667,
	long: 69.46667,
	isFound: false
},
{
	name: 'Kaharoa',
	lat: -37.99513,
	long: 76.23467,
	isFound: false
},
{
	name: 'Kaeo',
	lat: -35.1,
	long: 73.78333,
	isFound: false
},
{
	name: 'Kaeaea',
	lat: -38.38333,
	long: 75.06667,
	isFound: false
},
{
	name: 'Kaawa',
	lat: -37.51082,
	long: 74.88363,
	isFound: false
},
{
	name: 'Judgeford',
	lat: -41.11667,
	long: 74.93333,
	isFound: false
},
{
	name: 'Jordan',
	lat: -41.81667,
	long: 73.76667,
	isFound: false
},
{
	name: 'Johnstone',
	lat: -46.01667,
	long: 69.76667,
	isFound: false
},
{
	name: 'Johnsonville',
	lat: -41.22132,
	long: 74.80295,
	isFound: false
},
{
	name: 'Jerusalem',
	lat: -39.55,
	long: 75.06667,
	isFound: false
},
{
	name: 'Jackson Bay',
	lat: -43.97194,
	long: 68.61057,
	isFound: false
},
{
	name: 'Jacksons',
	lat: -42.75,
	long: 71.51667,
	isFound: false
},
{
	name: 'Island Cliff',
	lat: -44.95,
	long: 70.66667,
	isFound: false
},
{
	name: 'Island Block',
	lat: -45.75,
	long: 69.46667,
	isFound: false
},
{
	name: 'Isla Bank',
	lat: -46.2,
	long: 68.13333,
	isFound: false
},
{
	name: 'Irwell',
	lat: -43.71667,
	long: 72.33333,
	isFound: false
},
{
	name: 'Invercargill',
	lat: -46.4,
	long: 68.35,
	isFound: false
},
{
	name: 'Inchbonnie',
	lat: -42.73333,
	long: 71.46667,
	isFound: false
},
{
	name: 'Inangahua',
	lat: -41.91667,
	long: 71.88333,
	isFound: false
},
{
	name: 'Inaha',
	lat: -39.56667,
	long: 74.16667,
	isFound: false
},
{
	name: 'Ikawai',
	lat: -44.86667,
	long: 70.85,
	isFound: false
},
{
	name: 'Ikamatua',
	lat: -42.26667,
	long: 71.68333,
	isFound: false
},
{
	name: 'Ida Valley',
	lat: -45.03333,
	long: 69.83333,
	isFound: false
},
{
	name: 'Hyde',
	lat: -45.3,
	long: 70.25,
	isFound: false
},
{
	name: 'Huruiki',
	lat: -35.46667,
	long: 74.31667,
	isFound: false
},
{
	name: 'Hurleyville',
	lat: -39.63333,
	long: 74.5,
	isFound: false
},
{
	name: 'Hunua',
	lat: -37.08333,
	long: 75.06667,
	isFound: false
},
{
	name: 'Hunts Road',
	lat: -46.41667,
	long: 69.66667,
	isFound: false
},
{
	name: 'Hunterville',
	lat: -39.93656,
	long: 75.56835,
	isFound: false
},
{
	name: 'Hunter',
	lat: -44.61667,
	long: 71.05,
	isFound: false
},
{
	name: 'Hundalee',
	lat: -42.56667,
	long: 73.43333,
	isFound: false
},
{
	name: 'Hamua',
	lat: -40.55946,
	long: 75.74074,
	isFound: false
},
{
	name: 'Humphreys',
	lat: -42.73333,
	long: 71.11667,
	isFound: false
},
{
	name: 'Hukerenui',
	lat: -35.51667,
	long: 74.18333,
	isFound: false
},
{
	name: 'Hukarere',
	lat: -42.25,
	long: 71.7,
	isFound: false
},
{
	name: 'Hukapapa',
	lat: -39.05,
	long: 75.38333,
	isFound: false
},
{
	name: 'Hukanui',
	lat: -40.56794,
	long: 75.69452,
	isFound: false
},
{
	name: 'Huiroa',
	lat: -39.25,
	long: 74.46667,
	isFound: false
},
{
	name: 'Huirangi',
	lat: -39.05,
	long: 74.26667,
	isFound: false
},
{
	name: 'Huinga',
	lat: -39.35696,
	long: 74.43349,
	isFound: false
},
{
	name: 'Huia',
	lat: -36.99834,
	long: 74.56665,
	isFound: false
},
{
	name: 'Huhuka',
	lat: -43.96667,
	long: 68.91667,
	isFound: false
},
{
	name: 'Huatoki',
	lat: -39.13333,
	long: 74.05,
	isFound: false
},
{
	name: 'Huarau',
	lat: -36.1,
	long: 74.3,
	isFound: false
},
{
	name: 'Huapai',
	lat: -36.76667,
	long: 74.55,
	isFound: false
},
{
	name: 'Howard Junction',
	lat: -41.7,
	long: 72.66667,
	isFound: false
},
{
	name: 'Howard',
	lat: -41.76667,
	long: 72.66667,
	isFound: false
},
{
	name: 'Houto',
	lat: -35.75,
	long: 73.98333,
	isFound: false
},
{
	name: 'Houpoto',
	lat: -37.88333,
	long: 77.58333,
	isFound: false
},
{
	name: 'Houipapa',
	lat: -46.48333,
	long: 69.56667,
	isFound: false
},
{
	name: 'Houhora',
	lat: -34.78333,
	long: 73.1,
	isFound: false
},
{
	name: 'Hoteo',
	lat: -36.38543,
	long: 74.51997,
	isFound: false
},
{
	name: 'Horrelville',
	lat: -43.33333,
	long: 72.33333,
	isFound: false
},
{
	name: 'Horotiu',
	lat: -37.71667,
	long: 75.2,
	isFound: false
},
{
	name: 'Hororata',
	lat: -43.53333,
	long: 71.95,
	isFound: false
},
{
	name: 'Horopito',
	lat: -39.35,
	long: 75.38333,
	isFound: false
},
{
	name: 'Horoera',
	lat: -37.65,
	long: 78.48333,
	isFound: false
},
{
	name: 'Hornby',
	lat: -43.55,
	long: 72.53333,
	isFound: false
},
{
	name: 'Horeke',
	lat: -35.35,
	long: 73.6,
	isFound: false
},
{
	name: 'Hopelands',
	lat: -40.35217,
	long: 75.95283,
	isFound: false
},
{
	name: 'Hope',
	lat: -41.36667,
	long: 73.15,
	isFound: false
},
{
	name: 'Hook',
	lat: -44.68333,
	long: 71.13333,
	isFound: false
},
{
	name: 'Honikiwi',
	lat: -38.15,
	long: 75.1,
	isFound: false
},
{
	name: 'Homewood',
	lat: -41.1,
	long: 73.95,
	isFound: false
},
{
	name: 'Homai',
	lat: -37.01667,
	long: 74.88333,
	isFound: false
},
{
	name: 'Hokonui',
	lat: -46.11667,
	long: 68.48333,
	isFound: false
},
{
	name: 'Hokio',
	lat: -40.59678,
	long: 75.19322,
	isFound: false
},
{
	name: 'Hohonu',
	lat: -42.68333,
	long: 71.26667,
	isFound: false
},
{
	name: 'Ho Ho',
	lat: -42.71667,
	long: 71.03333,
	isFound: false
},
{
	name: 'Hobsonville',
	lat: -36.8,
	long: 74.66667,
	isFound: false
},
{
	name: 'Hiwipango',
	lat: -41.51667,
	long: 72.93333,
	isFound: false
},
{
	name: 'Hira',
	lat: -41.21528,
	long: 73.39611,
	isFound: false
},
{
	name: 'Hinuera',
	lat: -37.88333,
	long: 75.76667,
	isFound: false
},
{
	name: 'Hinerua',
	lat: -39.85,
	long: 76.23333,
	isFound: false
},
{
	name: 'Hinds',
	lat: -44,
	long: 171.56667,
	isFound: false
},
{
	name: 'Hindon Railway',
	lat: -45.71667,
	long: 70.33333,
	isFound: false
},
{
	name: 'Hindon',
	lat: -45.73333,
	long: 70.3,
	isFound: false
},
{
	name: 'Hinakura',
	lat: -41.3,
	long: 75.63333,
	isFound: false
},
{
	name: 'Hinahina',
	lat: -46.48333,
	long: 69.66667,
	isFound: false
},
{
	name: 'Himatangi',
	lat: -40.39146,
	long: 75.3153,
	isFound: false
},
{
	name: 'Hilton',
	lat: -44.15,
	long: 71.16667,
	isFound: false
},
{
	name: 'Hillsborough',
	lat: -39.1,
	long: 74.15,
	isFound: false
},
{
	name: 'Hillgrove',
	lat: -45.36667,
	long: 70.83333,
	isFound: false
},
{
	name: 'Hillersden',
	lat: -41.6,
	long: 73.43333,
	isFound: false
},
{
	name: 'Hillend',
	lat: -46.13333,
	long: 69.75,
	isFound: false
},
{
	name: 'Hilderthorpe',
	lat: -44.98333,
	long: 71.06667,
	isFound: false
},
{
	name: 'Hikutaia',
	lat: -37.28333,
	long: 75.65,
	isFound: false
},
{
	name: 'Hikurangi',
	lat: -35.6,
	long: 74.3,
	isFound: false
},
{
	name: 'Hikumutu',
	lat: -38.95,
	long: 75.28333,
	isFound: false
},
{
	name: 'Hikuai',
	lat: -37.08333,
	long: 75.78333,
	isFound: false
},
{
	name: 'Hihitahi',
	lat: -39.57027,
	long: 75.70641,
	isFound: false
},
{
	name: 'Highcliffe',
	lat: -45.88333,
	long: 70.58333,
	isFound: false
},
{
	name: 'Highbank',
	lat: -43.61667,
	long: 71.75,
	isFound: false
},
{
	name: 'Hicks Bay',
	lat: -37.6,
	long: 78.3,
	isFound: false
},
{
	name: 'Heriot',
	lat: -45.83333,
	long: 69.26667,
	isFound: false
},
{
	name: 'Heretaunga',
	lat: -41.15,
	long: 75.03333,
	isFound: false
},
{
	name: 'Herepo',
	lat: -43.11667,
	long: 70.55,
	isFound: false
},
{
	name: 'Herekino',
	lat: -35.25,
	long: 73.21667,
	isFound: false
},
{
	name: 'Herbertville',
	lat: -40.49194,
	long: 76.55785,
	isFound: false
},
{
	name: 'Herbert',
	lat: -45.23333,
	long: 70.78333,
	isFound: false
},
{
	name: 'Henley',
	lat: -45.98333,
	long: 70.16667,
	isFound: false
},
{
	name: 'Helvetia',
	lat: -37.18333,
	long: 74.86667,
	isFound: false
},
{
	name: 'Helena Bay',
	lat: -35.43333,
	long: 74.35,
	isFound: false
},
{
	name: 'Hedgehope',
	lat: -46.2,
	long: 68.53333,
	isFound: false
},
{
	name: 'Heddon Bush',
	lat: -46.08333,
	long: 68.15,
	isFound: false
},
{
	name: 'Hector',
	lat: -41.6,
	long: 71.88333,
	isFound: false
},
{
	name: 'Heathcote Valley',
	lat: -43.57787,
	long: 72.71224,
	isFound: false
},
{
	name: 'Hazletts',
	lat: -46.26667,
	long: 68.08333,
	isFound: false
},
{
	name: 'Hazelburn',
	lat: -44.2,
	long: 70.98333,
	isFound: false
},
{
	name: 'Haywards',
	lat: -41.15,
	long: 74.98333,
	isFound: false
},
{
	name: 'Hawkins',
	lat: -43.48333,
	long: 72.03333,
	isFound: false
},
{
	name: 'Hawkeswood',
	lat: -42.65,
	long: 73.33333,
	isFound: false
},
{
	name: 'Hawea Flat',
	lat: -44.65,
	long: 69.3,
	isFound: false
},
{
	name: 'Hawarden',
	lat: -42.93333,
	long: 72.63333,
	isFound: false
},
{
	name: 'Havelock Suburban',
	lat: -41.36667,
	long: 73.76667,
	isFound: false
},
{
	name: 'Havelock North',
	lat: -39.66667,
	long: 76.88333,
	isFound: false
},
{
	name: 'Havelock',
	lat: -41.28333,
	long: 73.76667,
	isFound: false
},
{
	name: 'Hauwai',
	lat: -41.75,
	long: 74.15,
	isFound: false
},
{
	name: 'Hauturu',
	lat: -38.1,
	long: 74.93333,
	isFound: false
},
{
	name: 'Hautapu',
	lat: -37.86083,
	long: 75.45355,
	isFound: false
},
{
	name: 'Haunui',
	lat: -40.60848,
	long: 76.04634,
	isFound: false
},
{
	name: 'Haumoana',
	lat: -39.6037,
	long: 76.94571,
	isFound: false
},
{
	name: 'Hatuma',
	lat: -40.03333,
	long: 76.5,
	isFound: false
},
{
	name: 'Hatfield',
	lat: -43.76667,
	long: 71.96667,
	isFound: false
},
{
	name: 'Hastwells',
	lat: -40.71667,
	long: 75.7,
	isFound: false
},
{
	name: 'Hastings',
	lat: -39.6381,
	long: 76.84918,
	isFound: false
},
{
	name: 'Haruru',
	lat: -35.28066,
	long: 74.05434,
	isFound: false
},
{
	name: 'Harihari',
	lat: -43.15,
	long: 70.55,
	isFound: false
},
{
	name: 'Harewood',
	lat: -43.48333,
	long: 72.58333,
	isFound: false
},
{
	name: 'Harapepe',
	lat: -37.93333,
	long: 75.13333,
	isFound: false
},
{
	name: 'Hapuku',
	lat: -42.31848,
	long: 73.74462,
	isFound: false
},
{
	name: 'Hanmer Springs',
	lat: -42.51667,
	long: 72.81667,
	isFound: false
},
{
	name: 'Hangatiki',
	lat: -38.25,
	long: 75.16667,
	isFound: false
},
{
	name: 'Hamurana',
	lat: -38.03333,
	long: 76.26667,
	isFound: false
},
{
	name: 'Hamilton Bay',
	lat: -40.98333,
	long: 73.85,
	isFound: false
},
{
	name: 'Hamilton',
	lat: -37.78333,
	long: 75.28333,
	isFound: false
},
{
	name: 'Halswell',
	lat: -43.58333,
	long: 72.56667,
	isFound: false
},
{
	name: 'Halkett',
	lat: -43.48333,
	long: 72.3,
	isFound: false
},
{
	name: 'Oban',
	lat: -46.89887,
	long: 68.12897,
	isFound: false
},
{
	name: 'Halcombe',
	lat: -40.14332,
	long: 75.4944,
	isFound: false
},
{
	name: 'Hakatere',
	lat: -44.05,
	long: 71.8,
	isFound: false
},
{
	name: 'Hakataramea',
	lat: -44.73333,
	long: 70.48333,
	isFound: false
},
{
	name: 'Hakaru',
	lat: -36.13333,
	long: 74.51667,
	isFound: false
},
{
	name: 'Hakahaka',
	lat: -41.3,
	long: 74.11667,
	isFound: false
},
{
	name: 'Hairini',
	lat: -37.73333,
	long: 76.16667,
	isFound: false
},
{
	name: 'Hackthorne',
	lat: -43.81667,
	long: 71.56667,
	isFound: false
},
{
	name: 'Haast',
	lat: -43.88333,
	long: 69.05,
	isFound: false
},
{
	name: 'Guthrie',
	lat: -38.3,
	long: 76.15,
	isFound: false
},
{
	name: 'Gummies Bush',
	lat: -46.28333,
	long: 68.01667,
	isFound: false
},
{
	name: 'Grovetown',
	lat: -41.48333,
	long: 73.96667,
	isFound: false
},
{
	name: 'Grove Bush',
	lat: -46.3,
	long: 68.48333,
	isFound: false
},
{
	name: 'Grove',
	lat: -41.28333,
	long: 73.91667,
	isFound: false
},
{
	name: 'Greville Harbour',
	lat: -40.81667,
	long: 73.8,
	isFound: false
},
{
	name: 'Greerton',
	lat: -37.72541,
	long: 76.13346,
	isFound: false
},
{
	name: 'Green Valley',
	lat: -45.28333,
	long: 70.51667,
	isFound: false
},
{
	name: 'Greenvale',
	lat: -45.88333,
	long: 69.05,
	isFound: false
},
{
	name: 'Greenstone',
	lat: -42.63333,
	long: 71.26667,
	isFound: false
},
{
	name: 'Greenpark',
	lat: -43.68333,
	long: 72.5,
	isFound: false
},
{
	name: 'Greenmeadows',
	lat: -39.53333,
	long: 76.86667,
	isFound: false
},
{
	name: 'Greenhills',
	lat: -46.55,
	long: 68.3,
	isFound: false
},
{
	name: 'Greenfield',
	lat: -46.1,
	long: 69.58333,
	isFound: false
},
{
	name: 'Greatford',
	lat: -40.12742,
	long: 75.41834,
	isFound: false
},
{
	name: 'Granity',
	lat: -41.63333,
	long: 71.85,
	isFound: false
},
{
	name: 'Grahams Beach',
	lat: -37.06667,
	long: 74.63333,
	isFound: false
},
{
	name: 'Gracefield',
	lat: -41.23333,
	long: 74.91667,
	isFound: false
},
{
	name: 'Gowanbridge',
	lat: -41.71667,
	long: 72.56667,
	isFound: false
},
{
	name: 'Gorge Road',
	lat: -46.48333,
	long: 68.7,
	isFound: false
},
{
	name: 'Gordonton',
	lat: -37.66667,
	long: 75.3,
	isFound: false
},
{
	name: 'Gordon',
	lat: -37.7,
	long: 75.83333,
	isFound: false
},
{
	name: 'Goose Bay',
	lat: -42.47903,
	long: 73.52783,
	isFound: false
},
{
	name: 'Goodwood',
	lat: -45.55,
	long: 70.71667,
	isFound: false
},
{
	name: 'Goldsborough',
	lat: -42.66667,
	long: 71.11667,
	isFound: false
},
{
	name: 'Golden Downs',
	lat: -41.58333,
	long: 72.88333,
	isFound: false
},
{
	name: 'Glorit',
	lat: -36.48333,
	long: 74.45,
	isFound: false
},
{
	name: 'Glinkes Gully',
	lat: -36.08333,
	long: 73.86667,
	isFound: false
},
{
	name: 'Glentunnel',
	lat: -43.48333,
	long: 71.93333,
	isFound: false
},
{
	name: 'Glentanner',
	lat: -43.90726,
	long: 70.12342,
	isFound: false
},
{
	name: 'Glenroy',
	lat: -43.51667,
	long: 71.83333,
	isFound: false
},
{
	name: 'Glenpark',
	lat: -45.43333,
	long: 70.66667,
	isFound: false
},
{
	name: 'Glen Oroua',
	lat: -40.33333,
	long: 75.4,
	isFound: false
},
{
	name: 'Glenore',
	lat: -46.1,
	long: 69.86667,
	isFound: false
},
{
	name: 'Glenorchy',
	lat: -44.85036,
	long: 68.38664,
	isFound: false
},
{
	name: 'Glenomaru',
	lat: -46.38333,
	long: 69.68333,
	isFound: false
},
{
	name: 'Glen Murray',
	lat: -37.44829,
	long: 74.95792,
	isFound: false
},
{
	name: 'Massey Glen',
	lat: -37.68333,
	long: 75.06667,
	isFound: false
},
{
	name: 'Glenlee',
	lat: -41.88333,
	long: 73.6,
	isFound: false
},
{
	name: 'Glenledi',
	lat: -46.18333,
	long: 70.08333,
	isFound: false
},
{
	name: 'Glenkenich',
	lat: -45.96667,
	long: 69.23333,
	isFound: false
},
{
	name: 'Gleniti',
	lat: -44.38333,
	long: 71.2,
	isFound: false
},
{
	name: 'Glenhope',
	lat: -41.65,
	long: 72.65,
	isFound: false
},
{
	name: 'Glenham',
	lat: -46.4,
	long: 68.85,
	isFound: false
},
{
	name: 'Glengarry',
	lat: -41.83333,
	long: 72.23333,
	isFound: false
},
{
	name: 'Glenfield',
	lat: -36.78262,
	long: 74.72107,
	isFound: false
},
{
	name: 'Glen Eden',
	lat: -36.91667,
	long: 74.65,
	isFound: false
},
{
	name: 'Glendhu',
	lat: -44.66667,
	long: 69.01667,
	isFound: false
},
{
	name: 'Glencoe',
	lat: -46.18333,
	long: 68.68333,
	isFound: false
},
{
	name: 'Glenbrook',
	lat: -37.21667,
	long: 74.78333,
	isFound: false
},
{
	name: 'Glenavy',
	lat: -44.91667,
	long: 71.1,
	isFound: false
},
{
	name: 'Glen Afton',
	lat: -37.61667,
	long: 75.03333,
	isFound: false
},
{
	name: 'Gladstone',
	lat: -41.08333,
	long: 75.65,
	isFound: false
},
{
	name: 'Gibbston',
	lat: -45.03333,
	long: 68.96667,
	isFound: false
},
{
	name: 'Georgetown',
	lat: -44.91667,
	long: 70.85,
	isFound: false
},
{
	name: 'Garston',
	lat: -45.46667,
	long: 68.68333,
	isFound: false
},
{
	name: 'Galloway',
	lat: -45.21667,
	long: 69.45,
	isFound: false
},
{
	name: 'Fruitlands',
	lat: -45.35,
	long: 69.3,
	isFound: false
},
{
	name: 'Freshford',
	lat: -45.78333,
	long: 68.78333,
	isFound: false
},
{
	name: 'French Farm',
	lat: -43.78333,
	long: 72.9,
	isFound: false
},
{
	name: 'Frasertown',
	lat: -38.96861,
	long: 77.40056,
	isFound: false
},
{
	name: 'Franz Josef',
	lat: -43.38905,
	long: 70.18189,
	isFound: false
},
{
	name: 'Frankton',
	lat: -45.02125,
	long: 68.73361,
	isFound: false
},
{
	name: 'Foxton Beach',
	lat: -40.46384,
	long: 75.22716,
	isFound: false
},
{
	name: 'Foxhill',
	lat: -41.43333,
	long: 72.98333,
	isFound: false
},
{
	name: 'Fortrose',
	lat: -46.56667,
	long: 68.8,
	isFound: false
},
{
	name: 'Fort Galatea',
	lat: -38.4,
	long: 76.73333,
	isFound: false
},
{
	name: 'Forsyth',
	lat: -45.95,
	long: 69.73333,
	isFound: false
},
{
	name: 'The Forks',
	lat: -43.25,
	long: 70.23333,
	isFound: false
},
{
	name: 'Fordell',
	lat: -39.96667,
	long: 75.2,
	isFound: false
},
{
	name: 'Flemington',
	lat: -44.01667,
	long: 71.73333,
	isFound: false
},
{
	name: 'Flaxton',
	lat: -43.35,
	long: 72.63333,
	isFound: false
},
{
	name: 'Flagstaff',
	lat: -45.83333,
	long: 70.48333,
	isFound: false
},
{
	name: 'Five Rivers',
	lat: -45.61667,
	long: 68.45,
	isFound: false
},
{
	name: 'Fitzroy',
	lat: -39.05,
	long: 74.1,
	isFound: false
},
{
	name: 'Fernside',
	lat: -43.31667,
	long: 72.53333,
	isFound: false
},
{
	name: 'Fernside',
	lat: -41.08333,
	long: 75.36667,
	isFound: false
},
{
	name: 'Fernleigh',
	lat: -37.25,
	long: 74.75,
	isFound: false
},
{
	name: 'Fernhill',
	lat: -39.58333,
	long: 76.76667,
	isFound: false
},
{
	name: 'Fern Flat',
	lat: -41.78333,
	long: 72.25,
	isFound: false
},
{
	name: 'Fergusons',
	lat: -42.96667,
	long: 70.73333,
	isFound: false
},
{
	name: 'Fendalton',
	lat: -43.51667,
	long: 72.6,
	isFound: false
},
{
	name: 'Favona',
	lat: -36.93333,
	long: 74.8,
	isFound: false
},
{
	name: 'Fairview',
	lat: -44.41667,
	long: 71.16667,
	isFound: false
},
{
	name: 'Fairton',
	lat: -43.86667,
	long: 71.8,
	isFound: false
},
{
	name: 'Fairlie',
	lat: -44.1,
	long: 70.83333,
	isFound: false
},
{
	name: 'Fairfield',
	lat: -45.9,
	long: 70.4,
	isFound: false
},
{
	name: 'Fairfax',
	lat: -46.2,
	long: 68.05,
	isFound: false
},
{
	name: 'Fairdown',
	lat: -41.73333,
	long: 71.7,
	isFound: false
},
{
	name: 'Fairburn',
	lat: -35.1,
	long: 73.4,
	isFound: false
},
{
	name: 'Fabians Valley',
	lat: -41.5,
	long: 73.58333,
	isFound: false
},
{
	name: 'Eyre Creek',
	lat: -45.58333,
	long: 68.46667,
	isFound: false
},
{
	name: 'Evans Flat',
	lat: -45.9,
	long: 69.63333,
	isFound: false
},
{
	name: 'Evansdale',
	lat: -45.71667,
	long: 70.56667,
	isFound: false
},
{
	name: 'Eureka',
	lat: -37.73333,
	long: 75.41667,
	isFound: false
},
{
	name: 'Ethelton',
	lat: -42.88333,
	long: 73.08333,
	isFound: false
},
{
	name: 'Esk Valley',
	lat: -44.53333,
	long: 71.08333,
	isFound: false
},
{
	name: 'Eskdale',
	lat: -39.39495,
	long: 76.84525,
	isFound: false
},
{
	name: 'Erua',
	lat: -39.23333,
	long: 75.4,
	isFound: false
},
{
	name: 'Erina',
	lat: -41.55,
	long: 73.6,
	isFound: false
},
{
	name: 'Erehwon',
	lat: -39.51649,
	long: 75.96514,
	isFound: false
},
{
	name: 'Enfield',
	lat: -44.96667,
	long: 70.78333,
	isFound: false
},
{
	name: 'Endeavour Inlet',
	lat: -41.08999,
	long: 74.17416,
	isFound: false
},
{
	name: 'Elsthorpe',
	lat: -39.91667,
	long: 76.81667,
	isFound: false
},
{
	name: 'Ellesmere',
	lat: -43.68333,
	long: 72.36667,
	isFound: false
},
{
	name: 'Elgin',
	lat: -43.95,
	long: 71.81667,
	isFound: false
},
{
	name: 'Eiffelton',
	lat: -44.03333,
	long: 71.68333,
	isFound: false
},
{
	name: 'Egmont Village',
	lat: -39.14534,
	long: 74.14403,
	isFound: false
},
{
	name: 'Edievale',
	lat: -45.8,
	long: 69.36667,
	isFound: false
},
{
	name: 'Edgecumbe',
	lat: -37.98333,
	long: 76.83333,
	isFound: false
},
{
	name: 'Edendale',
	lat: -46.31667,
	long: 68.78333,
	isFound: false
},
{
	name: 'East Tamaki',
	lat: -36.95,
	long: 74.9,
	isFound: false
},
{
	name: 'East Takaka',
	lat: -40.91667,
	long: 72.83333,
	isFound: false
},
{
	name: 'East Taieri',
	lat: -45.9,
	long: 70.33333,
	isFound: false
},
{
	name: 'Eastern Bush',
	lat: -45.98333,
	long: 67.76667,
	isFound: false
},
{
	name: 'East Chatton',
	lat: -45.98333,
	long: 68.96667,
	isFound: false
},
{
	name: 'Earnscleugh',
	lat: -45.21667,
	long: 69.31667,
	isFound: false
},
{
	name: 'Ealing',
	lat: -44.05,
	long: 71.41667,
	isFound: false
},
{
	name: 'Duvauchelle',
	lat: -43.75,
	long: 72.93333,
	isFound: false
},
{
	name: 'Duntroon',
	lat: -44.85538,
	long: 70.68484,
	isFound: false
},
{
	name: 'Dunsandel',
	lat: -43.66667,
	long: 72.18333,
	isFound: false
},
{
	name: 'Dunrobin',
	lat: -45.8,
	long: 69.31667,
	isFound: false
},
{
	name: 'Dunedin',
	lat: -45.87416,
	long: 70.50361,
	isFound: false
},
{
	name: 'Dunback',
	lat: -45.38459,
	long: 70.62922,
	isFound: false
},
{
	name: 'Drybread',
	lat: -44.98333,
	long: 69.61667,
	isFound: false
},
{
	name: 'Drury',
	lat: -37.1,
	long: 74.95,
	isFound: false
},
{
	name: 'Drummond',
	lat: -46.15,
	long: 68.15,
	isFound: false
},
{
	name: 'Dromore',
	lat: -43.85,
	long: 71.85,
	isFound: false
},
{
	name: 'Driving Creek',
	lat: -36.73333,
	long: 75.5,
	isFound: false
},
{
	name: 'Doyleston',
	lat: -43.75,
	long: 72.3,
	isFound: false
},
{
	name: 'Dovedale',
	lat: -41.33333,
	long: 72.93333,
	isFound: false
},
{
	name: 'Douglas',
	lat: -39.3,
	long: 74.46667,
	isFound: false
},
{
	name: 'Dorie',
	lat: -43.88333,
	long: 72.15,
	isFound: false
},
{
	name: 'Donnellys Crossing',
	lat: -35.71667,
	long: 73.61667,
	isFound: false
},
{
	name: 'Domett',
	lat: -42.85,
	long: 73.21667,
	isFound: false
},
{
	name: 'Dobson',
	lat: -42.45,
	long: 71.35,
	isFound: false
},
{
	name: 'Dipton',
	lat: -45.9,
	long: 68.36667,
	isFound: false
},
{
	name: 'Denniston',
	lat: -41.73333,
	long: 71.8,
	isFound: false
},
{
	name: 'Deep Creek',
	lat: -41.35,
	long: 73.63333,
	isFound: false
},
{
	name: 'Deborah',
	lat: -45.11667,
	long: 70.93333,
	isFound: false
},
{
	name: 'Dawson Falls',
	lat: -39.32384,
	long: 74.10463,
	isFound: false
},
{
	name: 'Dashwood',
	lat: -41.63333,
	long: 74.06667,
	isFound: false
},
{
	name: 'Dargaville',
	lat: -35.93333,
	long: 73.88333,
	isFound: false
},
{
	name: 'Darfield',
	lat: -43.48333,
	long: 72.11667,
	isFound: false
},
{
	name: 'Dalefield',
	lat: -41.05,
	long: 75.48333,
	isFound: false
},
{
	name: 'Dairy Flat',
	lat: -36.66667,
	long: 74.65,
	isFound: false
},
{
	name: 'Cust',
	lat: -43.31667,
	long: 72.36667,
	isFound: false
},
{
	name: 'Cunninghams',
	lat: -40.08333,
	long: 75.65,
	isFound: false
},
{
	name: 'Culverden',
	lat: -42.76667,
	long: 72.85,
	isFound: false
},
{
	name: 'Crushington',
	lat: -42.15,
	long: 71.9,
	isFound: false
},
{
	name: 'Cross Creek',
	lat: -41.16667,
	long: 75.21667,
	isFound: false
},
{
	name: 'Cronadun',
	lat: -42.03333,
	long: 71.86667,
	isFound: false
},
{
	name: 'Crofton',
	lat: -40.1,
	long: 75.38333,
	isFound: false
},
{
	name: 'Cricklewood',
	lat: -44.18333,
	long: 70.86667,
	isFound: false
},
{
	name: 'Crail Bay',
	lat: -41.15,
	long: 73.96667,
	isFound: false
},
{
	name: 'Craigieburn',
	lat: -43.1,
	long: 71.86667,
	isFound: false
},
{
	name: 'Cowes',
	lat: -36.78333,
	long: 75.15,
	isFound: false
},
{
	name: 'Coutts Island',
	lat: -43.43333,
	long: 72.61667,
	isFound: false
},
{
	name: 'Courtenay',
	lat: -43.45,
	long: 72.2,
	isFound: false
},
{
	name: 'Coromandel',
	lat: -36.7611,
	long: 75.49634,
	isFound: false
},
{
	name: 'Coroglen',
	lat: -36.91667,
	long: 75.7,
	isFound: false
},
{
	name: 'Cormacks',
	lat: -45.08333,
	long: 70.9,
	isFound: false
},
{
	name: 'Corbyvale',
	lat: -41.5,
	long: 72.05,
	isFound: false
},
{
	name: 'Coopers Creek',
	lat: -43.28333,
	long: 72.1,
	isFound: false
},
{
	name: 'Conical Hills',
	lat: -46.06667,
	long: 69.23333,
	isFound: false
},
{
	name: 'Colyton',
	lat: -40.23333,
	long: 75.65,
	isFound: false
},
{
	name: 'Colville',
	lat: -36.63333,
	long: 75.46667,
	isFound: false
},
{
	name: 'Collingwood',
	lat: -40.67716,
	long: 72.6807,
	isFound: false
},
{
	name: 'Colac Bay',
	lat: -46.36423,
	long: 67.88208,
	isFound: false
},
{
	name: 'Cobden',
	lat: -42.44357,
	long: 71.21291,
	isFound: false
},
{
	name: 'Coatesville',
	lat: -36.71667,
	long: 74.65,
	isFound: false
},
{
	name: 'Coalgate',
	lat: -43.48333,
	long: 71.96667,
	isFound: false
},
{
	name: 'Coal Creek  Flat',
	lat: -45.48333,
	long: 69.3,
	isFound: false
},
{
	name: 'Clydevale',
	lat: -46.1,
	long: 69.53333,
	isFound: false
},
{
	name: 'Clyde',
	lat: -45.18651,
	long: 69.31545,
	isFound: false
},
{
	name: 'Closeburn',
	lat: -45.08333,
	long: 68.46667,
	isFound: false
},
{
	name: 'Clive',
	lat: -39.58333,
	long: 76.91667,
	isFound: false
},
{
	name: 'Clinton',
	lat: -46.2,
	long: 69.36667,
	isFound: false
},
{
	name: 'Clifden',
	lat: -46.03333,
	long: 67.71667,
	isFound: false
},
{
	name: 'Clevedon',
	lat: -37,
	long: 75.05,
	isFound: false
},
{
	name: 'Clearburn',
	lat: -44.36129,
	long: 70.00283,
	isFound: false
},
{
	name: 'Claudelands',
	lat: -37.78333,
	long: 75.28333,
	isFound: false
},
{
	name: 'Clarksville',
	lat: -46.13333,
	long: 69.91667,
	isFound: false
},
{
	name: 'Clarkville',
	lat: -43.41667,
	long: 72.61667,
	isFound: false
},
{
	name: 'Clarks',
	lat: -45.73333,
	long: 70.05,
	isFound: false
},
{
	name: 'Clareville',
	lat: -41.01667,
	long: 75.55,
	isFound: false
},
{
	name: 'Clarendon',
	lat: -46.05,
	long: 70.03333,
	isFound: false
},
{
	name: 'Clarence',
	lat: -42.16667,
	long: 73.93333,
	isFound: false
},
{
	name: 'Claremont',
	lat: -44.4,
	long: 71.08333,
	isFound: false
},
{
	name: 'Claremont',
	lat: -44.38333,
	long: 71.11667,
	isFound: false
},
{
	name: 'Clandeboye',
	lat: -44.21667,
	long: 71.38333,
	isFound: false
},
{
	name: 'Churchill',
	lat: -37.4258,
	long: 75.0771,
	isFound: false
},
{
	name: 'Christchurch',
	lat: -43.53333,
	long: 72.63333,
	isFound: false
},
{
	name: 'Chorlton',
	lat: -43.71667,
	long: 73.03333,
	isFound: false
},
{
	name: 'Cheviot',
	lat: -42.81667,
	long: 73.26667,
	isFound: false
},
{
	name: 'Chesterfield',
	lat: -42.6153,
	long: 71.09185,
	isFound: false
},
{
	name: 'Chertsey',
	lat: -43.8,
	long: 71.93333,
	isFound: false
},
{
	name: 'Cheltenham',
	lat: -40.15,
	long: 75.66667,
	isFound: false
},
{
	name: 'Chelsea',
	lat: -36.81667,
	long: 74.7,
	isFound: false
},
{
	name: 'Chatton',
	lat: -45.98333,
	long: 68.91667,
	isFound: false
},
{
	name: 'Chatto Creek',
	lat: -45.13333,
	long: 69.51667,
	isFound: false
},
{
	name: 'Chaslands',
	lat: -46.58333,
	long: 69.33333,
	isFound: false
},
{
	name: 'Charwell Forks',
	lat: -42.41667,
	long: 73.36667,
	isFound: false
},
{
	name: 'Charlton',
	lat: -46.15,
	long: 68.91667,
	isFound: false
},
{
	name: 'Charleston',
	lat: -41.90589,
	long: 71.4383,
	isFound: false
},
{
	name: 'Charing Cross',
	lat: -43.55,
	long: 72.15,
	isFound: false
},
{
	name: 'Chaneys',
	lat: -43.43333,
	long: 72.65,
	isFound: false
},
{
	name: 'Centre Bush',
	lat: -46.05,
	long: 68.33333,
	isFound: false
},
{
	name: 'Caversham',
	lat: -45.9,
	long: 70.48333,
	isFound: false
},
{
	name: 'Castlepoint',
	lat: -40.9,
	long: 76.21667,
	isFound: false
},
{
	name: 'Castle Hill',
	lat: -43.2053,
	long: 71.71811,
	isFound: false
},
{
	name: 'Castlecliff',
	lat: -39.95,
	long: 74.98333,
	isFound: false
},
{
	name: 'Cass',
	lat: -43.0353,
	long: 71.75553,
	isFound: false
},
{
	name: 'Cashmere Hills',
	lat: -43.58333,
	long: 72.63333,
	isFound: false
},
{
	name: 'Carters Beach',
	lat: -41.75,
	long: 71.56667,
	isFound: false
},
{
	name: 'Carswells',
	lat: -40.93333,
	long: 75.91667,
	isFound: false
},
{
	name: 'Carnarvon',
	lat: -40.28333,
	long: 75.31667,
	isFound: false
},
{
	name: 'Carew',
	lat: -43.96667,
	long: 71.36667,
	isFound: false
},
{
	name: 'Cardiff',
	lat: -39.36667,
	long: 74.23333,
	isFound: false
},
{
	name: 'Cape Runaway',
	lat: -37.56667,
	long: 78.01667,
	isFound: false
},
{
	name: 'Canvastown',
	lat: -41.3,
	long: 73.66667,
	isFound: false
},
{
	name: 'Campbells Bay',
	lat: -36.74645,
	long: 74.75978,
	isFound: false
},
{
	name: 'Camerons',
	lat: -42.55156,
	long: 71.14287,
	isFound: false
},
{
	name: 'Camden',
	lat: -41.85,
	long: 73.68333,
	isFound: false
},
{
	name: 'Cambrian',
	lat: -44.9,
	long: 69.75,
	isFound: false
},
{
	name: 'Cairnbrae',
	lat: -43.66667,
	long: 71.68333,
	isFound: false
},
{
	name: 'Cable Bay',
	lat: -41.16667,
	long: 73.41667,
	isFound: false
},
{
	name: 'Caberfeidh',
	lat: -46.51667,
	long: 69.48333,
	isFound: false
},
{
	name: 'Bush Gully',
	lat: -41.31667,
	long: 75.65,
	isFound: false
},
{
	name: 'Burnham',
	lat: -43.61667,
	long: 72.31667,
	isFound: false
},
{
	name: 'Burkes Pass',
	lat: -44.08333,
	long: 70.65,
	isFound: false
},
{
	name: 'Buried Village',
	lat: -38.21667,
	long: 76.36667,
	isFound: false
},
{
	name: 'Bunnythorpe',
	lat: -40.28333,
	long: 75.63333,
	isFound: false
},
{
	name: 'Bulls',
	lat: -40.17487,
	long: 75.38463,
	isFound: false
},
{
	name: 'Buckland',
	lat: -37.228,
	long: 74.92754,
	isFound: false
},
{
	name: 'Brydone',
	lat: -46.25,
	long: 68.8,
	isFound: false
},
{
	name: 'Bruntwood',
	lat: -37.85,
	long: 75.43333,
	isFound: false
},
{
	name: 'Brunswick',
	lat: -39.85,
	long: 75.01667,
	isFound: false
},
{
	name: 'Brunnerton',
	lat: -42.43333,
	long: 71.31667,
	isFound: false
},
{
	name: 'Bruce Bay',
	lat: -43.58333,
	long: 69.68333,
	isFound: false
},
{
	name: 'Browns',
	lat: -46.15,
	long: 68.41667,
	isFound: false
},
{
	name: 'Broughton Bay',
	lat: -41.21667,
	long: 73.93333,
	isFound: false
},
{
	name: 'Brookside',
	lat: -43.7,
	long: 72.3,
	isFound: false
},
{
	name: 'Brooklyn',
	lat: -41.30586,
	long: 74.76257,
	isFound: false
},
{
	name: 'Bromley',
	lat: -43.55,
	long: 72.7,
	isFound: false
},
{
	name: 'Broadwood',
	lat: -35.26667,
	long: 73.38333,
	isFound: false
},
{
	name: 'Broad Bay',
	lat: -45.85,
	long: 70.61667,
	isFound: false
},
{
	name: 'Brightwater',
	lat: -41.38333,
	long: 73.11667,
	isFound: false
},
{
	name: 'Brighton',
	lat: -45.95,
	long: 70.33333,
	isFound: false
},
{
	name: 'Brighams Creek',
	lat: -36.78333,
	long: 74.6,
	isFound: false
},
{
	name: 'Bortons',
	lat: -44.87923,
	long: 70.76273,
	isFound: false
},
{
	name: 'Bombay',
	lat: -37.16667,
	long: 74.98333,
	isFound: false
},
{
	name: 'Bog Roy',
	lat: -44.56667,
	long: 70.1,
	isFound: false
},
{
	name: 'Bluespur',
	lat: -45.88333,
	long: 69.68333,
	isFound: false
},
{
	name: 'Blind River',
	lat: -41.68333,
	long: 74.11667,
	isFound: false
},
{
	name: 'Blackwater',
	lat: -42.25,
	long: 71.76667,
	isFound: false
},
{
	name: 'Blackstone Hill',
	lat: -44.95,
	long: 69.91667,
	isFound: false
},
{
	name: 'Blacks Point',
	lat: -42.13333,
	long: 71.88333,
	isFound: false
},
{
	name: 'Blackburn',
	lat: -39.86667,
	long: 76.28333,
	isFound: false
},
{
	name: 'Blackball',
	lat: -42.36667,
	long: 71.41667,
	isFound: false
},
{
	name: 'Birchwood',
	lat: -45.93333,
	long: 67.86667,
	isFound: false
},
{
	name: 'Birch Hill',
	lat: -41.65,
	long: 73.28333,
	isFound: false
},
{
	name: 'Birchfield',
	lat: -41.68333,
	long: 71.8,
	isFound: false
},
{
	name: 'Big Omaha',
	lat: -36.33333,
	long: 74.73333,
	isFound: false
},
{
	name: 'Bideford',
	lat: -40.86667,
	long: 75.86667,
	isFound: false
},
{
	name: 'Bexley',
	lat: -43.35,
	long: 72.06667,
	isFound: false
},
{
	name: 'Bethlehem',
	lat: -37.69496,
	long: 76.10861,
	isFound: false
},
{
	name: 'Berwick',
	lat: -45.95,
	long: 70.1,
	isFound: false
},
{
	name: 'Berwen',
	lat: -44.53359,
	long: 69.86769,
	isFound: false
},
{
	name: 'Berlins',
	lat: -41.86667,
	long: 71.83333,
	isFound: false
},
{
	name: 'Bennetts',
	lat: -43.3,
	long: 72.3,
	isFound: false
},
{
	name: 'Benmore',
	lat: -45.95,
	long: 68.35,
	isFound: false
},
{
	name: 'Benhar',
	lat: -46.23333,
	long: 69.8,
	isFound: false
},
{
	name: 'Bendigo',
	lat: -44.91667,
	long: 69.35,
	isFound: false
},
{
	name: 'Bells',
	lat: -43.3,
	long: 72.58333,
	isFound: false
},
{
	name: 'Bell Hill',
	lat: -42.55,
	long: 71.6,
	isFound: false
},
{
	name: 'Bell Block',
	lat: -39.03333,
	long: 74.15,
	isFound: false
},
{
	name: 'Belgrove',
	lat: -41.45,
	long: 72.95,
	isFound: false
},
{
	name: 'Belfast',
	lat: -43.45,
	long: 72.63333,
	isFound: false
},
{
	name: 'Becks',
	lat: -45,
	long: 169.73333,
	isFound: false
},
{
	name: 'Beaumont',
	lat: -45.82252,
	long: 69.53012,
	isFound: false
},
{
	name: 'Bealey',
	lat: -43.03333,
	long: 71.6,
	isFound: false
},
{
	name: 'Bay View',
	lat: -39.42035,
	long: 76.86727,
	isFound: false
},
{
	name: 'Baylys Beach',
	lat: -35.9523,
	long: 73.74698,
	isFound: false
},
{
	name: 'Baton',
	lat: -41.31667,
	long: 72.71667,
	isFound: false
},
{
	name: 'Batley',
	lat: -36.21667,
	long: 74.31667,
	isFound: false
},
{
	name: 'Barrytown',
	lat: -42.25,
	long: 71.33333,
	isFound: false
},
{
	name: 'Barrys Bay',
	lat: -43.76097,
	long: 72.91129,
	isFound: false
},
{
	name: 'Barrhill',
	lat: -43.66667,
	long: 71.85,
	isFound: false
},
{
	name: 'Barnego',
	lat: -46.23333,
	long: 69.71667,
	isFound: false
},
{
	name: 'Bannockburn',
	lat: -45.08922,
	long: 69.15907,
	isFound: false
},
{
	name: 'Bankside',
	lat: -43.7,
	long: 72.08333,
	isFound: false
},
{
	name: 'Ballance',
	lat: -40.40219,
	long: 75.80168,
	isFound: false
},
{
	name: 'Balfour',
	lat: -45.83333,
	long: 68.58333,
	isFound: false
},
{
	name: 'Balcairn',
	lat: -43.2,
	long: 72.7,
	isFound: false
},
{
	name: 'Bainham',
	lat: -40.76667,
	long: 72.55,
	isFound: false
},
{
	name: 'Bainesse',
	lat: -40.41004,
	long: 75.37987,
	isFound: false
},
{
	name: 'Babylon',
	lat: -35.9,
	long: 73.81667,
	isFound: false
},
{
	name: 'Aylesbury',
	lat: -43.53333,
	long: 72.26667,
	isFound: false
},
{
	name: 'Awhitu',
	lat: -37.08333,
	long: 74.65,
	isFound: false
},
{
	name: 'Awatuna',
	lat: -42.6363,
	long: 71.06833,
	isFound: false
},
{
	name: 'Awatuna',
	lat: -39.45,
	long: 74.05,
	isFound: false
},
{
	name: 'Awatea',
	lat: -46.36667,
	long: 69.53333,
	isFound: false
},
{
	name: 'Awarua Plains',
	lat: -46.48333,
	long: 68.38333,
	isFound: false
},
{
	name: 'Awarua',
	lat: -35.57664,
	long: 73.83465,
	isFound: false
},
{
	name: 'Awaroa',
	lat: -36.81667,
	long: 75.11667,
	isFound: false
},
{
	name: 'Awapiri',
	lat: -41.83333,
	long: 73.73333,
	isFound: false
},
{
	name: 'Awanui',
	lat: -35.05,
	long: 73.25,
	isFound: false
},
{
	name: 'Awamoko',
	lat: -44.93333,
	long: 70.88333,
	isFound: false
},
{
	name: 'Awamarino',
	lat: -38.26667,
	long: 74.8,
	isFound: false
},
{
	name: 'Awamangu',
	lat: -46.1,
	long: 69.65,
	isFound: false
},
{
	name: 'Awakino',
	lat: -38.65,
	long: 74.63333,
	isFound: false
},
{
	name: 'Awakeri',
	lat: -38,
	long: 176.9,
	isFound: false
},
{
	name: 'Awakaponga',
	lat: -37.93333,
	long: 76.76667,
	isFound: false
},
{
	name: 'Awahuri',
	lat: -40.27029,
	long: 75.51157,
	isFound: false
},
{
	name: 'Awaawakino',
	lat: -37.96667,
	long: 77.45,
	isFound: false
},
{
	name: 'Avondale',
	lat: -41.68333,
	long: 73.63333,
	isFound: false
},
{
	name: 'Avondale',
	lat: -36.88333,
	long: 74.7,
	isFound: false
},
{
	name: 'Auroa',
	lat: -39.48333,
	long: 74.05,
	isFound: false
},
{
	name: 'Aukopae',
	lat: -38.9,
	long: 75.16667,
	isFound: false
},
{
	name: 'Auckland',
	lat: -36.84853,
	long: 74.76349,
	isFound: false
},
{
	name: 'Atiamuri',
	lat: -38.38333,
	long: 76.01667,
	isFound: false
},
{
	name: 'Athol',
	lat: -45.51667,
	long: 68.58333,
	isFound: false
},
{
	name: 'Athenree',
	lat: -37.46667,
	long: 75.91667,
	isFound: false
},
{
	name: 'Atene',
	lat: -39.73333,
	long: 75.15,
	isFound: false
},
{
	name: 'Atawhai',
	lat: -41.23333,
	long: 73.31667,
	isFound: false
},
{
	name: 'Atarau',
	lat: -42.33333,
	long: 71.48333,
	isFound: false
},
{
	name: 'Atapo',
	lat: -41.61667,
	long: 72.78333,
	isFound: false
},
{
	name: 'Ataahua',
	lat: -43.78333,
	long: 72.65,
	isFound: false
},
{
	name: 'Ashwick Flat',
	lat: -44,
	long: 170.83333,
	isFound: false
},
{
	name: 'Ashton',
	lat: -44.03333,
	long: 71.76667,
	isFound: false
},
{
	name: 'Ashley Clinton',
	lat: -39.95,
	long: 76.25,
	isFound: false
},
{
	name: 'Ashley	Ashley',
	lat: -43.27418,
	long: 72.59493,
	isFound: false
},
{
	name: 'Ashhurst',
	lat: -40.29108,
	long: 75.75471,
	isFound: false
},
{
	name: 'Arundel',
	lat: -43.98333,
	long: 71.28333,
	isFound: false
},
{
	name: 'Arthurton',
	lat: -46.11667,
	long: 69.16667,
	isFound: false
},
{
	name: 'Arthurs Point',
	lat: -44.98333,
	long: 68.66667,
	isFound: false
},
{
	name: 'Ariki',
	lat: -41.8,
	long: 72.21667,
	isFound: false
},
{
	name: 'Aria',
	lat: -38.55,
	long: 74.98333,
	isFound: false
},
{
	name: 'Argyll East',
	lat: -39.86667,
	long: 76.53333,
	isFound: false
},
{
	name: 'Ardlussa',
	lat: -45.81667,
	long: 68.65,
	isFound: false
},
{
	name: 'Arcadia',
	lat: -44.73333,
	long: 68.36667,
	isFound: false
},
{
	name: 'Aratapu',
	lat: -36.01667,
	long: 73.9,
	isFound: false
},
{
	name: 'Ararimu',
	lat: -37.15,
	long: 75.03333,
	isFound: false
},
{
	name: 'Ararata',
	lat: -39.51667,
	long: 74.36667,
	isFound: false
},
{
	name: 'Arapuni',
	lat: -38.07093,
	long: 75.64598,
	isFound: false
},
{
	name: 'Arapohue',
	lat: -35.98333,
	long: 73.96667,
	isFound: false
},
{
	name: 'Arapito',
	lat: -41.26667,
	long: 72.16667,
	isFound: false
},
{
	name: 'Arapae',
	lat: -38.41667,
	long: 75.08333,
	isFound: false
},
{
	name: 'Aranui',
	lat: -43.51667,
	long: 72.7,
	isFound: false
},
{
	name: 'Aranga',
	lat: -35.73333,
	long: 73.61667,
	isFound: false
},
{
	name: 'Aramoho',
	lat: -39.9019,
	long: 75.06474,
	isFound: false
},
{
	name: 'Aramoana',
	lat: -45.78333,
	long: 70.7,
	isFound: false
},
{
	name: 'Aramiro',
	lat: -37.89179,
	long: 75.03178,
	isFound: false
},
{
	name: 'Arahura',
	lat: -42.68333,
	long: 71.03333,
	isFound: false
},
{
	name: 'Appleby',
	lat: -41.3,
	long: 73.11667,
	isFound: false
},
{
	name: 'Apiti',
	lat: -39.96667,
	long: 75.88333,
	isFound: false
},
{
	name: 'Apata',
	lat: -37.64869,
	long: 75.98184,
	isFound: false
},
{
	name: 'Aparima',
	lat: -46.08333,
	long: 68.05,
	isFound: false
},
{
	name: 'Aotuhia',
	lat: -39.2404,
	long: 74.80634,
	isFound: false
},
{
	name: 'Aorere',
	lat: -40.71667,
	long: 72.6,
	isFound: false
},
{
	name: 'Aongatete',
	lat: -37.61667,
	long: 75.95,
	isFound: false
},
{
	name: 'Aokautere',
	lat: -40.36667,
	long: 75.66667,
	isFound: false
},
{
	name: 'Owahanga',
	lat: -40.67984,
	long: 76.33411,
	isFound: false
},
{
	name: 'Anama',
	lat: -43.75,
	long: 71.43333,
	isFound: false
},
{
	name: 'Amodeo Bay',
	lat: -36.67276,
	long: 75.44209,
	isFound: false
},
{
	name: 'Amberley',
	lat: -43.15589,
	long: 72.72975,
	isFound: false
},
{
	name: 'Alton',
	lat: -39.66667,
	long: 74.45,
	isFound: false
},
{
	name: 'Altimarlock',
	lat: -41.73333,
	long: 73.86667,
	isFound: false
},
{
	name: 'Alma',
	lat: -45.11667,
	long: 70.91667,
	isFound: false
},
{
	name: 'Allanton',
	lat: -45.91667,
	long: 70.26667,
	isFound: false
},
{
	name: 'Allandale',
	lat: -43.65,
	long: 72.65,
	isFound: false
},
{
	name: 'Alfredton',
	lat: -40.68002,
	long: 75.85644,
	isFound: false
},
{
	name: 'Alford Forest',
	lat: -43.61667,
	long: 71.5,
	isFound: false
},
{
	name: 'Albury',
	lat: -44.23333,
	long: 70.86667,
	isFound: false
},
{
	name: 'Albert Town',
	lat: -44.68333,
	long: 69.2,
	isFound: false
},
{
	name: 'Albany',
	lat: -36.71667,
	long: 74.7,
	isFound: false
},
{
	name: 'Akitio',
	lat: -40.6,
	long: 76.41667,
	isFound: false
},
{
	name: 'Akerama',
	lat: -35.48333,
	long: 74.16667,
	isFound: false
},
{
	name: 'Akatore',
	lat: -46.15,
	long: 70.11667,
	isFound: false
},
{
	name: 'Aka Aka',
	lat: -37.29355,
	long: 74.79235,
	isFound: false
},
{
	name: 'Aickens',
	lat: -42.78333,
	long: 71.61667,
	isFound: false
},
{
	name: 'Ahuroa',
	lat: -36.47531,
	long: 74.55421,
	isFound: false
},
{
	name: 'Ahurangi',
	lat: -39.7,
	long: 75.11667,
	isFound: false
},
{
	name: 'Ahuiti',
	lat: -39.63333,
	long: 175,
	isFound: false
},
{
	name: 'Ahititi',
	lat: -38.43333,
	long: 78.05,
	isFound: false
},
{
	name: 'Ahititi',
	lat: -38.86667,
	long: 74.6,
	isFound: false
},
{
	name: 'Ahipara',
	lat: -35.16604,
	long: 73.15563,
	isFound: false
},
{
	name: 'Ahimia',
	lat: -36.85,
	long: 75.48333,
	isFound: false
},
{
	name: 'Ahikiwi',
	lat: -35.78333,
	long: 73.73333,
	isFound: false
},
{
	name: 'Ahaura',
	lat: -42.34925,
	long: 71.53928,
	isFound: false
},
{
	name: 'Admiralty Bay',
	lat: -40.95,
	long: 73.91667,
	isFound: false
},
{
	name: 'Adams Flat',
	lat: -46.11667,
	long: 69.83333,
	isFound: false
},
{
	name: 'Abbotsford',
	lat: -45.88333,
	long: 70.41667,
	isFound: false
},
{
	name: 'Opunake',
	lat: -39.45556,
	long: 73.85833,
	isFound: false
},
{
	name: 'Eltham',
	lat: -39.42917,
	long: 74.3,
	isFound: false
},
{
	name: 'Hawera',
	lat: -39.59167,
	long: 74.28333,
	isFound: false
},
{
	name: 'White Tank',
	lat: -39.75833,
	long: 74.46667,
	isFound: false
},
{
	name: 'Patea',
	lat: -39.75833,
	long: 74.48333,
	isFound: false
},
{
	name: 'Ratana',
	lat: -40.04115,
	long: 75.17707,
	isFound: false
},
{
	name: 'Foxton',
	lat: -40.47277,
	long: 75.28601,
	isFound: false
},
{
	name: 'Levin',
	lat: -40.63333,
	long: 75.275,
	isFound: false
},
{
	name: 'Otaki',
	lat: -40.75833,
	long: 75.15,
	isFound: false
},
{
	name: 'Eastbourne',
	lat: -41.3,
	long: 74.9,
	isFound: false
},
{
	name: 'Porangahau',
	lat: -40.27889,
	long: 76.62833,
	isFound: false
},
{
	name: 'Wairoa',
	lat: -39.03333,
	long: 77.36667,
	isFound: false
},
{
	name: 'Whangawehi',
	lat: -39.10086,
	long: 77.94371,
	isFound: false
},
{
	name: 'Pah',
	lat: -40.26417,
	long: 76.64861,
	isFound: false
},
{
	name: 'Kaikora',
	lat: -39.89306,
	long: 76.59917,
	isFound: false
},
{
	name: 'Te Aute',
	lat: -39.82833,
	long: 76.6325,
	isFound: false
},
{
	name: 'Waipureko',
	lat: -39.60384,
	long: 76.94657,
	isFound: false
},
{
	name: 'Pahowai',
	lat: -39.60056,
	long: 76.89417,
	isFound: false
},
{
	name: 'Otatara',
	lat: -39.55583,
	long: 76.83861,
	isFound: false
},
{
	name: 'Tamihunu',
	lat: -39.54028,
	long: 76.84778,
	isFound: false
},
{
	name: 'Pukekura',
	lat: -39.52333,
	long: 76.84417,
	isFound: false
},
{
	name: 'Mino',
	lat: -39.46083,
	long: 76.81167,
	isFound: false
},
{
	name: 'Maraitara',
	lat: -39.44,
	long: 76.83167,
	isFound: false
},
{
	name: 'Petane',
	lat: -39.41306,
	long: 76.87667,
	isFound: false
},
{
	name: 'Opoiti',
	lat: -38.88833,
	long: 77.49278,
	isFound: false
},
{
	name: 'Waitaniwha',
	lat: -39.05917,
	long: 77.79889,
	isFound: false
},
{
	name: 'Maungatea Village',
	lat: -39.18333,
	long: 77.84278,
	isFound: false
},
{
	name: 'Mahanga Beach',
	lat: -39.00861,
	long: 77.885,
	isFound: false
},
{
	name: 'Gisborne',
	lat: -38.65333,
	long: 78.00417,
	isFound: false
},
{
	name: 'Rat Hill',
	lat: -41.54056,
	long: 75.41056,
	isFound: false
},
{
	name: 'Waipawa',
	lat: -41.41222,
	long: 75.51528,
	isFound: false
},
{
	name: 'Homewood',
	lat: -41.18361,
	long: 75.95806,
	isFound: false
},
{
	name: 'Masterton',
	lat: -40.95972,
	long: 75.6575,
	isFound: false
},
{
	name: 'Upper Tauheru',
	lat: -40.90694,
	long: 75.81111,
	isFound: false
},
{
	name: 'Hokitika',
	lat: -42.71667,
	long: 70.96667,
	isFound: false
},
{
	name: 'Greymouth',
	lat: -42.46667,
	long: 71.2,
	isFound: false
},
{
	name: 'Pahautane',
	lat: -42.05,
	long: 71.36667,
	isFound: false
},
{
	name: 'Westport',
	lat: -41.75262,
	long: 71.6037,
	isFound: false
},
{
	name: 'Bluff',
	lat: -46.6,
	long: 68.33333,
	isFound: false
},
{
	name: 'Riverton',
	lat: -46.35,
	long: 68.01667,
	isFound: false
},
{
	name: 'Dacre',
	lat: -46.31667,
	long: 68.63333,
	isFound: false
},
{
	name: 'Wallacetown',
	lat: -46.33333,
	long: 68.26667,
	isFound: false
},
{
	name: 'Winton',
	lat: -46.15,
	long: 68.33333,
	isFound: false
},
{
	name: 'Flints Bush',
	lat: -46.3,
	long: 68.15,
	isFound: false
},
{
	name: 'Waiohiki',
	lat: -39.56667,
	long: 76.81667,
	isFound: false
},
{
	name: 'Awatoto',
	lat: -39.55,
	long: 76.9,
	isFound: false
},
{
	name: 'Clifton',
	lat: -43.56435,
	long: 72.7492,
	isFound: false
},
{
	name: 'Jamestown',
	lat: -44.4,
	long: 68.05,
	isFound: false
},
{
	name: 'Wrights Bush',
	lat: -46.31667,
	long: 68.21667,
	isFound: false
},
{
	name: 'Waikouro',
	lat: -46.1,
	long: 67.99167,
	isFound: false
},
{
	name: 'Glenduan',
	lat: -41.18611,
	long: 73.365,
	isFound: false
},
{
	name: 'Blackpool',
	lat: -36.78889,
	long: 75.01444,
	isFound: false
},
{
	name: 'Red Beach',
	lat: -36.61236,
	long: 74.68871,
	isFound: false
},
{
	name: 'Stanmore Bay',
	lat: -36.6275,
	long: 74.73139,
	isFound: false
},
{
	name: 'Algies Bay',
	lat: -36.43528,
	long: 74.74028,
	isFound: false
},
{
	name: 'Herne Bay',
	lat: -36.84611,
	long: 74.72917,
	isFound: false
},
{
	name: 'Point Resolution',
	lat: -36.85139,
	long: 74.78944,
	isFound: false
},
{
	name: 'Mission Bay',
	lat: -36.85472,
	long: 74.83167,
	isFound: false
},
{
	name: 'Devonport',
	lat: -36.82972,
	long: 74.79944,
	isFound: false
},
{
	name: 'Northcote Point',
	lat: -36.81528,
	long: 74.74583,
	isFound: false
},
{
	name: 'Bayswater',
	lat: -36.81556,
	long: 74.77333,
	isFound: false
},
{
	name: 'North Head',
	lat: -36.82778,
	long: 74.80833,
	isFound: false
},
{
	name: 'Belmont',
	lat: -36.8075,
	long: 74.78639,
	isFound: false
},
{
	name: 'Takapuna',
	lat: -36.79167,
	long: 74.77583,
	isFound: false
},
{
	name: 'Westlake',
	lat: -36.785,
	long: 74.7525,
	isFound: false
},
{
	name: 'Tauranga',
	lat: -37.68611,
	long: 76.16667,
	isFound: false
},
{
	name: 'Mount Maunganui',
	lat: -37.64167,
	long: 76.18611,
	isFound: false
},
{
	name: 'Rangiwaea Marae',
	lat: -37.6375,
	long: 76.12222,
	isFound: false
},
{
	name: 'Opunui Marae',
	lat: -37.63889,
	long: 76.11194,
	isFound: false
},
{
	name: 'Waitara',
	lat: -39.00158,
	long: 74.23836,
	isFound: false
},
{
	name: 'Longs Beach',
	lat: -36.04056,
	long: 74.52917,
	isFound: false
},
{
	name: 'Urquharts Bay',
	lat: -35.84139,
	long: 74.53694,
	isFound: false
},
{
	name: 'Port Chalmers',
	lat: -45.81588,
	long: 70.62102,
	isFound: false
},
{
	name: 'Saint Kilda',
	lat: -45.9,
	long: 70.51944,
	isFound: false
},
{
	name: 'Mosgiel',
	lat: -45.875,
	long: 70.34722,
	isFound: false
},
{
	name: 'Milton',
	lat: -46.12083,
	long: 69.96944,
	isFound: false
},
{
	name: 'Kaitangata',
	lat: -46.275,
	long: 69.85,
	isFound: false
},
{
	name: 'Balclutha',
	lat: -46.23389,
	long: 69.75,
	isFound: false
},
{
	name: 'Paeroa',
	lat: -37.36667,
	long: 75.66667,
	isFound: false
},
{
	name: 'Waihi',
	lat: -37.38333,
	long: 75.83333,
	isFound: false
},
{
	name: 'Papakura',
	lat: -37.06573,
	long: 74.94393,
	isFound: false
},
{
	name: 'Whakatane',
	lat: -37.95855,
	long: 76.98545,
	isFound: false
},
{
	name: 'Opotiki',
	lat: -38.00915,
	long: 77.28706,
	isFound: false
},
{
	name: 'Thames',
	lat: -37.13832,
	long: 75.54011,
	isFound: false
},
{
	name: 'Carters Mill',
	lat: -43.97333,
	long: 68.85417,
	isFound: false
},
{
	name: 'Gore',
	lat: -46.10282,
	long: 68.94357,
	isFound: false
},
{
	name: 'Milford Sound',
	lat: -44.66836,
	long: 67.92005,
	isFound: false
},
{
	name: 'Halfmoon Bay',
	lat: -46.89962,
	long: 68.12927,
	isFound: false
},
{
	name: 'Queenstown',
	lat: -45.03023,
	long: 68.66271,
	isFound: false
},
{
	name: 'Waiatoto',
	lat: -43.98929,
	long: 68.78837,
	isFound: false
},
{
	name: 'Arrowtown',
	lat: -44.93837,
	long: 68.81007,
	isFound: false
},
{
	name: 'Mataura',
	lat: -46.1784,
	long: 68.85009,
	isFound: false
},
{
	name: 'Lake Hawea',
	lat: -44.60836,
	long: 69.26008,
	isFound: false
},
{
	name: 'Cromwell',
	lat: -45.03837,
	long: 69.20008,
	isFound: false
},
{
	name: 'Alexandra',
	lat: -45.24837,
	long: 69.37008,
	isFound: false
},
{
	name: 'Roxburgh',
	lat: -45.54056,
	long: 69.31466,
	isFound: false
},
{
	name: 'Tapanui',
	lat: -45.93839,
	long: 69.26009,
	isFound: false
},
{
	name: 'Twizel',
	lat: -44.25842,
	long: 70.10063,
	isFound: false
},
{
	name: 'Otematata',
	lat: -44.60779,
	long: 70.19097,
	isFound: false
},
{
	name: 'Naseby',
	lat: -45.01836,
	long: 70.13009,
	isFound: false
},
{
	name: 'Lawrence',
	lat: -45.90839,
	long: 69.6901,
	isFound: false
},
{
	name: 'Whataroa',
	lat: -43.2583,
	long: 70.36011,
	isFound: false
},
{
	name: 'Waikouaiti',
	lat: -45.58837,
	long: 70.6501,
	isFound: false
},
{
	name: 'Waldronville',
	lat: -45.91838,
	long: 70.4001,
	isFound: false
},
{
	name: 'Runanga',
	lat: -42.39828,
	long: 71.25013,
	isFound: false
},
{
	name: 'Kumara',
	lat: -42.62829,
	long: 71.18013,
	isFound: false
},
{
	name: 'Ross',
	lat: -42.88829,
	long: 70.81012,
	isFound: false
},
{
	name: 'Geraldine',
	lat: -44.09061,
	long: 71.24458,
	isFound: false
},
{
	name: 'Waimate',
	lat: -44.72836,
	long: 71.05009,
	isFound: false
},
{
	name: 'Oamaru',
	lat: -45.09758,
	long: 70.97087,
	isFound: false
},
{
	name: 'Taranui',
	lat: -45.18836,
	long: 70.88009,
	isFound: false
},
{
	name: 'Hampden',
	lat: -45.31837,
	long: 70.81009,
	isFound: false
},
{
	name: 'Palmerston',
	lat: -45.47837,
	long: 70.7201,
	isFound: false
},
{
	name: 'Kopara',
	lat: -42.56842,
	long: 71.73488,
	isFound: false
},
{
	name: 'Ashburton',
	lat: -43.89834,
	long: 71.73011,
	isFound: false
},
{
	name: 'Temuka',
	lat: -44.22834,
	long: 71.2801,
	isFound: false
},
{
	name: 'Kainga',
	lat: -43.4102,
	long: 72.66249,
	isFound: false
},
{
	name: 'Rangiora',
	lat: -43.30437,
	long: 72.58356,
	isFound: false
},
{
	name: 'Kaiapoi',
	lat: -43.37832,
	long: 72.64013,
	isFound: false
},
{
	name: 'Woodend Beach',
	lat: -43.33842,
	long: 72.70335,
	isFound: false
},
{
	name: 'Mount Pleasant',
	lat: -43.56276,
	long: 72.71525,
	isFound: false
},
{
	name: 'Diamond Harbour',
	lat: -43.62888,
	long: 72.7254,
	isFound: false
},
{
	name: 'Lyttelton',
	lat: -43.60314,
	long: 72.71765,
	isFound: false
},
{
	name: 'Sumner',
	lat: -43.56833,
	long: 72.76013,
	isFound: false
},
{
	name: 'Akaroa',
	lat: -43.80384,
	long: 72.96817,
	isFound: false
},
{
	name: 'South Bay',
	lat: -42.42485,
	long: 73.68239,
	isFound: false
},
{
	name: 'Inglewood',
	lat: -39.15824,
	long: 74.1802,
	isFound: false
},
{
	name: 'Stratford',
	lat: -39.33762,
	long: 74.28368,
	isFound: false
},
{
	name: 'Feilding',
	lat: -40.21825,
	long: 75.54021,
	isFound: false
},
{
	name: 'Marton',
	lat: -40.0692,
	long: 75.37823,
	isFound: false
},
{
	name: 'Waikanae Beach',
	lat: -40.86384,
	long: 75.021,
	isFound: false
},
{
	name: 'Raetihi',
	lat: -39.42877,
	long: 75.27725,
	isFound: false
},
{
	name: 'Ohakune',
	lat: -39.40824,
	long: 75.40021,
	isFound: false
},
{
	name: 'Whakapapa Village',
	lat: -39.20063,
	long: 75.53946,
	isFound: false
},
{
	name: 'Shannon',
	lat: -40.54826,
	long: 75.42021,
	isFound: false
},
{
	name: 'Greytown',
	lat: -41.07827,
	long: 75.4602,
	isFound: false
},
{
	name: 'Carterton',
	lat: -41.01827,
	long: 75.5302,
	isFound: false
},
{
	name: 'Martinborough',
	lat: -41.20827,
	long: 75.4302,
	isFound: false
},
{
	name: 'Featherston',
	lat: -41.10827,
	long: 75.3202,
	isFound: false
},
{
	name: 'Mangakino',
	lat: -38.3741,
	long: 75.77104,
	isFound: false
},
{
	name: 'Taihape',
	lat: -39.67819,
	long: 75.79799,
	isFound: false
},
{
	name: 'Pahiatua',
	lat: -40.45345,
	long: 75.8406,
	isFound: false
},
{
	name: 'Woodville',
	lat: -40.33719,
	long: 75.86678,
	isFound: false
},
{
	name: 'Eketahuna',
	lat: -40.64623,
	long: 75.70366,
	isFound: false
},
{
	name: 'Riversdale Beach',
	lat: -41.08827,
	long: 76.07021,
	isFound: false
},
{
	name: 'Hihi',
	lat: -34.97389,
	long: 73.53952,
	isFound: false
},
{
	name: 'Kaitaia',
	lat: -35.11485,
	long: 73.26366,
	isFound: false
},
{
	name: 'Coopers Beach',
	lat: -34.99295,
	long: 73.50802,
	isFound: false
},
{
	name: 'Kaikohe ',
	lat: -35.39818,
	long: 73.80018,
	isFound: false
},
{
	name: 'Whangarei',
	lat: -35.73167,
	long: 74.32391,
	isFound: false
},
{
	name: 'Ocean Beach',
	lat: -35.83674,
	long: 74.57001,
	isFound: false
},
{
	name: 'Ruakaka',
	lat: -35.90818,
	long: 74.45019,
	isFound: false
},
{
	name: 'Helensville',
	lat: -36.67819,
	long: 74.45019,
	isFound: false
},
{
	name: 'Takanini',
	lat: -37.0482,
	long: 74.90019,
	isFound: false
},
{
	name: 'Pukekohe',
	lat: -37.20196,
	long: 74.90363,
	isFound: false
},
{
	name: 'Papatoetoe',
	lat: -36.9682,
	long: 74.84019,
	isFound: false
},
{
	name: 'Otahuhu',
	lat: -36.9382,
	long: 74.84019,
	isFound: false
},
{
	name: 'Manurewa',
	lat: -37.0182,
	long: 74.88019,
	isFound: false
},
{
	name: 'Otara',
	lat: -36.9482,
	long: 74.87019,
	isFound: false
},
{
	name: 'Pakuranga',
	lat: -36.88333,
	long: 74.91667,
	isFound: false
},
{
	name: 'Devonport',
	lat: -36.8282,
	long: 74.79019,
	isFound: false
},
{
	name: 'New Lynn',
	lat: -36.90694,
	long: 74.68704,
	isFound: false
},
{
	name: 'Onehunga',
	lat: -36.9182,
	long: 74.78019,
	isFound: false
},
{
	name: 'Mount Wellington',
	lat: -36.9082,
	long: 74.82019,
	isFound: false
},
{
	name: 'One Tree Hill',
	lat: -36.8982,
	long: 74.78019,
	isFound: false
},
{
	name: 'Mount Eden',
	lat: -36.88158,
	long: 74.76204,
	isFound: false
},
{
	name: 'Mount Roskill',
	lat: -36.9082,
	long: 74.73019,
	isFound: false
},
{
	name: 'Mount Albert',
	lat: -36.8782,
	long: 74.72019,
	isFound: false
},
{
	name: 'Remuera',
	lat: -36.88041,
	long: 74.79819,
	isFound: false
},
{
	name: 'Newmarket',
	lat: -36.86977,
	long: 74.77566,
	isFound: false
},
{
	name: 'Oneroa',
	lat: -36.77819,
	long: 75.01019,
	isFound: false
},
{
	name: 'Ostend',
	lat: -36.7982,
	long: 75.04019,
	isFound: false
},
{
	name: 'Palm Beach',
	lat: -36.77819,
	long: 75.05019,
	isFound: false
},
{
	name: 'Meremere',
	lat: -37.31901,
	long: 75.06903,
	isFound: false
},
{
	name: 'Te Kuiti',
	lat: -38.33627,
	long: 75.17014,
	isFound: false
},
{
	name: 'Benneydale',
	lat: -38.5206,
	long: 75.36158,
	isFound: false
},
{
	name: 'Taumarunui',
	lat: -38.87823,
	long: 75.2602,
	isFound: false
},
{
	name: 'Hot Water Beach',
	lat: -36.88819,
	long: 75.82021,
	isFound: false
},
{
	name: 'Te Aroha',
	lat: -37.52821,
	long: 75.71021,
	isFound: false
},
{
	name: 'Morrinsville',
	lat: -37.64821,
	long: 75.5202,
	isFound: false
},
{
	name: 'Matamata',
	lat: -37.8106,
	long: 75.76237,
	isFound: false
},
{
	name: 'Putaruru',
	lat: -38.04822,
	long: 75.78021,
	isFound: false
},
{
	name: 'Te Rangiita',
	lat: -38.9095,
	long: 75.90909,
	isFound: false
},
{
	name: 'Kuratau',
	lat: -38.88823,
	long: 75.77021,
	isFound: false
},
{
	name: 'Acacia Bay',
	lat: -38.70293,
	long: 76.03085,
	isFound: false
},
{
	name: 'Te Teko',
	lat: -38.03653,
	long: 76.79358,
	isFound: false
},
{
	name: 'Galatea',
	lat: -38.40823,
	long: 76.74021,
	isFound: false
},
{
	name: 'Cambridge',
	lat: -37.87822,
	long: 75.4402,
	isFound: false
},
{
	name: 'Fencourt',
	lat: -37.86401,
	long: 75.48917,
	isFound: false
},
{
	name: 'Tokanui',
	lat: -38.05931,
	long: 75.31562,
	isFound: false
},
{
	name: 'Te Awamutu',
	lat: -38.00822,
	long: 75.3302,
	isFound: false
},
{
	name: 'Rotorua',
	lat: -38.13874,
	long: 76.24516,
	isFound: false
},
{
	name: 'Brooklyn',
	lat: -41.0963,
	long: 72.96703,
	isFound: false
},
{
	name: 'Kaiteriteri',
	lat: -41.03426,
	long: 73.01735,
	isFound: false
},
{
	name: 'Marahau',
	lat: -40.99825,
	long: 73.00017,
	isFound: false
},
{
	name: 'Te Kopuru',
	lat: -36.02819,
	long: 73.90018,
	isFound: false
},
{
	name: 'Picton',
	lat: -41.29067,
	long: 74.00801,
	isFound: false
},
{
	name: 'Blenheim',
	lat: -41.51603,
	long: 73.9528,
	isFound: false
},
{
	name: 'Riverlands',
	lat: -41.51828,
	long: 73.98018,
	isFound: false
},
{
	name: 'Mangawhai Heads',
	lat: -36.08819,
	long: 74.57019,
	isFound: false
},
{
	name: 'Snells Beach',
	lat: -36.40819,
	long: 74.72019,
	isFound: false
},
{
	name: 'Mahurangi West',
	lat: -36.49819,
	long: 74.69019,
	isFound: false
},
{
	name: 'Mount Victoria',
	lat: -41.29696,
	long: 74.7936,
	isFound: false
},
{
	name: 'Upper Hutt',
	lat: -41.13827,
	long: 75.0502,
	isFound: false
},
{
	name: 'Porirua',
	lat: -41.14827,
	long: 74.82019,
	isFound: false
},
{
	name: 'Makara',
	lat: -41.26865,
	long: 74.70493,
	isFound: false
},
{
	name: 'Te Puke',
	lat: -37.77822,
	long: 76.33021,
	isFound: false
},
{
	name: 'Ohauiti',
	lat: -37.76559,
	long: 76.17637,
	isFound: false
},
{
	name: 'Dannevirke',
	lat: -40.20549,
	long: 76.10084,
	isFound: false
},
{
	name: 'Waipukurau',
	lat: -39.99825,
	long: 76.56021,
	isFound: false
},
{
	name: 'Wairoa',
	lat: -39.03823,
	long: 77.42022,
	isFound: false
},
{
	name: 'Ngaruawahia',
	lat: -37.66738,
	long: 75.15554,
	isFound: false
},
{
	name: 'Temple View',
	lat: -37.82077,
	long: 75.2255,
	isFound: false
},
{
	name: 'Riverton',
	lat: -46.34842,
	long: 68.01008,
	isFound: false
},
{
	name: 'Punakaiki',
	lat: -42.10879,
	long: 71.33681,
	isFound: false
},
{
	name: 'Huntly',
	lat: -37.55821,
	long: 75.1602,
	isFound: false
},
{
	name: 'Waipawa',
	lat: -39.93825,
	long: 76.60021,
	isFound: false
},
{
	name: 'Pegasus',
	lat: -43.30832,
	long: 72.69013,
	isFound: false
},
{
	name: 'Coal Creek Flat',
	lat: -45.49871,
	long: 69.29556,
	isFound: false
},
{
	name: 'Roxburgh Hydro',
	lat: -45.48027,
	long: 69.31276,
	isFound: false
},
{
	name: 'Cooks Beach',
	lat: -36.83828,
	long: 75.74451,
	isFound: false
},
{
	name: 'Mount Cook Village',
	lat: -43.73709,
	long: 70.09926,
	isFound: false
},
{
	name: 'Veda Glen',
	lat: -37.74944,
	long: 76.12427,
	isFound: false
},
{
	name: 'The lakes',
	lat: -37.74187,
	long: 76.11067,
	isFound: false
},
{
	name: 'Hari Hari',
	lat: -43.14859,
	long: 70.55184,
	isFound: false
},
{
	name: 'Totara',
	lat: -37.16309,
	long: 75.55539,
	isFound: false
},
{
	name: 'Motuoapa',
	lat: -38.93403,
	long: 75.87217,
	isFound: false
},
{
	name: 'Mahia Park',
	lat: -37.04935,
	long: 74.89513,
	isFound: false
},
{
	name: 'Titirangi South',
	lat: -36.95373,
	long: 74.65086,
	isFound: false
},
{
	name: 'North Cove',
	lat: -36.40871,
	long: 74.83007,
	isFound: false
},
{
	name: 'Cape Jackson',
	lat: -40.9966,
	long: 74.3134,
	isFound: false
},
{
	name: 'Paraparaumu North',
	lat: -40.90551,
	long: 75.01839,
	isFound: false
},
{
	name: 'Peka Peka',
	lat: -40.83624,
	long: 75.05993,
	isFound: false
},
{
	name: 'Pohara',
	lat: -40.83451,
	long: 72.88198,
	isFound: false
},
{
	name: 'Golden Bay',
	lat: -40.75489,
	long: 72.89734,
	isFound: false
},
{
	name: 'Cable Bay',
	lat: -34.99438,
	long: 73.49283,
	isFound: false
},
{
	name: 'Bay of Many Coves',
	lat: -41.19168,
	long: 74.16042,
	isFound: false
},
{
	name: 'Horohoro',
	lat: -38.23737,
	long: 76.16925,
	isFound: false
},
{
	name: 'Pukehangi',
	lat: -38.13635,
	long: 76.20787,
	isFound: false
},
{
	name: 'Mansion House',
	lat: -36.43033,
	long: 74.81869,
	isFound: false
},
{
	name: 'Bay View',
	lat: -36.7732,
	long: 74.70837,
	isFound: false
},
{
	name: 'Unsworth Heights',
	lat: -36.75374,
	long: 74.7215,
	isFound: false
},
{
	name: 'Schnapper Rock',
	lat: -36.7547,
	long: 74.69489,
	isFound: false
},
{
	name: 'Fairview Hights',
	lat: -36.71598,
	long: 74.7136,
	isFound: false
},
{
	name: 'Oteha Valley',
	lat: -36.7201,
	long: 74.71824,
	isFound: false
},
{
	name: 'North Cross',
	lat: -36.70903,
	long: 74.72742,
	isFound: false
},
{
	name: 'Pinehill',
	lat: -36.7287,
	long: 74.72244,
	isFound: false
},
{
	name: 'Te Puru',
	lat: -37.04658,
	long: 75.52041,
	isFound: false
},
{
	name: 'Governors Bay',
	lat: -43.62266,
	long: 72.64663,
	isFound: false
},
{
	name: 'Lichfield',
	lat: -38.10751,
	long: 75.82103,
	isFound: false
},
{
	name: 'Mt Lyford',
	lat: -42.48982,
	long: 73.15826,
	isFound: false
},
{
	name: 'Matarangi',
	lat: -36.73207,
	long: 75.65684,
	isFound: false
},
{
	name: 'Hahei',
	lat: -36.84061,
	long: 75.80322,
	isFound: false
},
{
	name: 'Cornwallis',
	lat: -37.01239,
	long: 74.60258,
	isFound: false
},
{
	name: 'Manukau Heads',
	lat: -37.05038,
	long: 74.56035,
	isFound: false
},
{
	name: 'Castor Bay',
	lat: -36.75762,
	long: 74.76579,
	isFound: false
},
{
	name: 'Avenues',
	lat: -35.72488,
	long: 74.31101,
	isFound: false
},
{
	name: 'Wyuna Bay',
	lat: -36.76319,
	long: 75.46063,
	isFound: false
},
{
	name: 'Otaki',
	lat: -41.06366,
	long: 74.19433,
	isFound: false
},
{
	name: 'Melville Cove',
	lat: -41.05204,
	long: 74.17257,
	isFound: false
},
{
	name: 'Cape Jackson',
	lat: -41.06023,
	long: 74.24827,
	isFound: false
},
{
	name: 'Ship Cove',
	lat: -41.10293,
	long: 74.23334,
	isFound: false
},
{
	name: 'Resolution Bay',
	lat: -41.11405,
	long: 74.21475,
	isFound: false
},
{
	name: 'The Pines',
	lat: -41.12291,
	long: 74.18364,
	isFound: false
},
{
	name: 'Shantytown Herritage Park',
	lat: -42.52854,
	long: 71.17266,
	isFound: false
},
{
	name: 'Ferrymead',
	lat: -43.56721,
	long: 72.70126,
	isFound: false
},
{
	name: 'Waikerikeri',
	lat: -45.14539,
	long: 69.35961,
	isFound: false
},
{
	name: 'Rangiriri West',
	lat: -37.43626,
	long: 75.12851,
	isFound: false
},
{
	name: 'Parapara',
	lat: -40.72453,
	long: 72.6913,
	isFound: false
},
{
	name: 'Whakatette Bay',
	lat: -37.08973,
	long: 75.51685,
	isFound: false
},
{
	name: 'Port Jackson',
	lat: -36.48521,
	long: 75.33957,
	isFound: false
},
{
	name: 'Johnston Cres',
	lat: -43.89576,
	long: 68.91973,
	isFound: false
},
{
	name: 'Walkwire',
	lat: -44.01825,
	long: 68.81691,
	isFound: false
},
{
	name: 'Ohau',
	lat: -44.27142,
	long: 69.84769,
	isFound: false
},
{
	name: 'Pembroke',
	lat: -39.32367,
	long: 74.22909,
	isFound: false
},
{
	name: 'Kaikoura Flat',
	lat: -42.37078,
	long: 73.63952,
	isFound: false
},
{
	name: 'Lower Vogeltown',
	lat: -39.0696,
	long: 74.0756,
	isFound: false
},
{
	name: 'Sandymount',
	lat: -45.87274,
	long: 70.63656,
	isFound: false
},
{
	name: 'Kutarere',
	lat: -38.046,
	long: 77.14407,
	isFound: false
},
{
	name: 'Sandspit',
	lat: -36.39324,
	long: 74.72287,
	isFound: false
},
{
	name: 'Lochmara bay',
	lat: -41.22909,
	long: 73.98816,
	isFound: false
},
{
	name: 'Medlands',
	lat: -36.2686,
	long: 75.49084,
	isFound: false
},
{
	name: 'Tuki Tuki',
	lat: -39.70857,
	long: 76.93786,
	isFound: false
},
{
	name: 'Kahuranaki',
	lat: -39.79139,
	long: 76.84933,
	isFound: false
},
{
	name: 'Gloriavale',
	lat: -42.60552,
	long: 71.70301,
	isFound: false
},
{
	name: 'Kennedys Bush',
	lat: -43.60324,
	long: 72.5816,
	isFound: false
},
{
	name: 'Makahu',
	lat: -39.29251,
	long: 74.62971,
	isFound: false
}
];

let numCorrect = 0;

function checkInput() {
    const input = document.getElementById('townInput').value;
    const townObject = towns.find(town => town.name.toLowerCase() === input.toLowerCase());
    if (!(townObject==null) && !townObject.isFound) {
        townObject.isFound = true;
        clearInputBox();
        addMarker(townObject);
        incrementScore();
        addToList(townObject.name);
    }
}

function clearInputBox() {
    document.getElementById('townInput').value = '';
}

function addMarker(townObject) {
    const lngLat = [(townObject.long<100)?townObject.long+100:townObject.long, townObject.lat];
    const popup = new mapboxgl.Popup({
        closeButton: false
    });
    popup.setLngLat(lngLat).setHTML(generateDescription(townObject));
    const marker = new mapboxgl.Marker({
        color: '#5E9E3E'
    }).setLngLat(lngLat).setPopup(popup);
    marker.addTo(map);
}

function generateDescription(townObject) {
    return `<p class='popup'>${townObject.name}</p><p class='popup'>Population: ${townObject.population}</p>`;
}

function incrementScore() {
    document.getElementById('score').innerHTML = `You have named ${++numCorrect} ${numCorrect > 1 ? 'towns/cities' : 'town/city'}!`;
}

function addToList(town) {
    var node = document.createElement("LI");
    var textnode = document.createTextNode(town);
    node.appendChild(textnode);
    document.getElementById("foundTowns").appendChild(node);
}