import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io';
import { BsCurrencyDollar } from 'react-icons/bs';
import { AiOutlinePlus } from 'react-icons/ai';

export const cardList = [{
  id: 1,
  title: 'NEW ACCOUNT',
  icon: <IoIosArrowUp className="left__icon" />,
  value: 234,
  iconRight: '%',
  roundPercentage: 68,
  borderColor: '#3b82f6',
},
{
  id: 2,
  title: 'TOTAL EXPENSES',
  icon: <IoIosArrowDown className="left__icon" />,
  value: 234,
  iconRight: '%',
  roundPercentage: 62,
  borderColor: 'red',
},
{
  id: 3,
  title: 'COMPANY VALUE',
  icon: <BsCurrencyDollar className="left__icon" />,
  value: 234,
  iconRight: '%',
  roundPercentage: 72,
  borderColor: 'orange',
},
{
  id: 4,
  title: 'NEW EMPLOYEES',
  icon: <AiOutlinePlus className="left__icon" />,
  value: 234,
  iconRight: '%',
  roundPercentage: 81,
  borderColor: 'green',
},
];

export const targetList = [{
  id: 1,
  title: 'Income Target',
  targetNumber: 71,

},
{
  id: 2,
  title: 'Expense Target',
  targetNumber: 54,
},
{
  id: 3,
  title: 'Spendings Target',
  targetNumber: 32,
},
{
  id: 4,
  title: 'Totals target',
  targetNumber: 89,
},
];

export const trachTrack = [{
  id: 1,
  title: 'Income',
  icon: <BsCurrencyDollar className="left__icon" />,
  value: 234,
  iconRight: '%',
  roundPercentage: '+14%',
  borderColor: '#3b82f6',
},
{
  id: 2,
  title: 'Expenses',
  icon: <BsCurrencyDollar className="left__icon" />,
  value: 234,
  iconRight: '%',
  roundPercentage: '8%',
  borderColor: 'red',
},
{
  id: 3,
  title: 'Spendings',
  icon: <BsCurrencyDollar className="left__icon" />,
  value: 234,
  iconRight: '%',
  roundPercentage: '15%',
  borderColor: 'orange',
},
{
  id: 4,
  title: 'Totals',
  icon: <BsCurrencyDollar className="left__icon" />,
  value: 234,
  iconRight: '%',
  roundPercentage: '+76%',
  borderColor: 'green',
},
];
