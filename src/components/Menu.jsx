import React from 'react';
import { Link } from 'react-router-dom';

const menuItems = [
  {
    name: 'User Management',
    link: '/usermanagement',
    image: "https://sdmntprukwest.oaiusercontent.com/files/00000000-cb5c-6243-825f-c88c57474b3d/raw?se=2025-04-23T06%3A41%3A53Z&sp=r&sv=2024-08-04&sr=b&scid=43bdfd1e-c285-54cf-86a7-6a2aae0b423c&skoid=d958ec58-d47c-4d2f-a9f2-7f3e03fdcf72&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2025-04-23T04%3A29%3A35Z&ske=2025-04-24T04%3A29%3A35Z&sks=b&skv=2024-08-04&sig=VXh7Ei8Ng%2BhRNtn13%2BS8caXsaXIxDuz3HrTaRs91H8I%3D" ,
  },
  {
    name: 'Statistics',
    link: '/statistics',
    image: "https://sdmntprsouthcentralus.oaiusercontent.com/files/00000000-f57c-61f7-92ff-c03100c511af/raw?se=2025-04-23T06%3A38%3A19Z&sp=r&sv=2024-08-04&sr=b&scid=181bcee4-db7c-5ca7-8bd3-956ef67b1cd4&skoid=d958ec58-d47c-4d2f-a9f2-7f3e03fdcf72&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2025-04-23T04%3A30%3A44Z&ske=2025-04-24T04%3A30%3A44Z&sks=b&skv=2024-08-04&sig=x9eeBT9KbrZhycH8TPxa9Psx5/Rc21mOrv52SvYIwxk%3D",
  },
  {
    name: 'Library A',
    link: '/libraryA',
    image: "https://sdmntprnorthcentralus.oaiusercontent.com/files/00000000-64e4-622f-b2eb-145dbadc0955/raw?se=2025-04-23T06%3A44%3A44Z&sp=r&sv=2024-08-04&sr=b&scid=9aeaf508-f926-5df7-a221-cecedb8e9706&skoid=d958ec58-d47c-4d2f-a9f2-7f3e03fdcf72&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2025-04-23T04%3A29%3A47Z&ske=2025-04-24T04%3A29%3A47Z&sks=b&skv=2024-08-04&sig=feU%2BcEZnB1AOmB0L/m91nSjVjDzfvS%2BSTICRtxEeZG4%3D",
  },
  {
    name: 'Library B',
    link: '/libraryB',
    image: "https://sdmntpreastus2.oaiusercontent.com/files/00000000-6468-61f6-a8a7-ac02acf5a10d/raw?se=2025-04-23T06%3A46%3A42Z&sp=r&sv=2024-08-04&sr=b&scid=6f48efe7-711f-51e5-84bf-683fbec3c17a&skoid=d958ec58-d47c-4d2f-a9f2-7f3e03fdcf72&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2025-04-23T04%3A30%3A17Z&ske=2025-04-24T04%3A30%3A17Z&sks=b&skv=2024-08-04&sig=JgbecNJYiHPLxLsVuy7ofDZ6FnFNbhA7lKBQ0BYZAgI%3D" ,
  },
  {
    name: 'Bank',
    link: '/bank',
    image: "https://sdmntprsouthcentralus.oaiusercontent.com/files/00000000-0760-61f7-83e6-7d768773d614/raw?se=2025-04-23T06%3A50%3A58Z&sp=r&sv=2024-08-04&sr=b&scid=74821827-7491-505d-9fe5-061a96d4f185&skoid=d958ec58-d47c-4d2f-a9f2-7f3e03fdcf72&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2025-04-23T04%3A29%3A15Z&ske=2025-04-24T04%3A29%3A15Z&sks=b&skv=2024-08-04&sig=AJDbNm8oB79S3LbKWwGsCQChb74Eamyxqli6%2BLehAbI%3D",
  },
];

const Menu = () => {
  return (
    <div className="p-8 min-h-screen bg-gray-50">
      <div className="mb-10 text-4xl font-bold text-blue-900 tracking-wide">
        Overview
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {menuItems.map((item, index) => (
          <Link to={item.link} key={index} className="group">
            <div className="flex flex-col items-center justify-center text-center bg-white p-6 rounded-2xl shadow-md border hover:shadow-xl hover:border-blue-300 transition-all duration-300 ease-in-out">
              <img
                src={item.image}
                alt={item.name}
                className="w-28 h-28 mb-4 object-contain group-hover:scale-105 transition-transform"
              />
              <span className="text-lg font-semibold text-gray-800 group-hover:text-blue-800">
                {item.name}
              </span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Menu;
