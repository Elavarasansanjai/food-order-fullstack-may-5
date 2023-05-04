import MenuItem from '../components/menuItem';

const MenuPage = () => {
  const products = [
    {
      name: 'Milk',
      price: 20,
      quantity: 0,
      about: 'this is natural milk, and healthy milk',
      id: 'i1',
      image:
        'https://media.istockphoto.com/id/1337307092/photo/pouring-fresh-milk-in-glass.jpg?s=612x612&w=0&k=20&c=8dUKQ5u-BbqmUvXpVIKzfUCQbBoCK4AF2qftMcAVkLM=',
      delivery: 'Free',
    },
    {
      name: 'butter',
      id: 'i2',
      price: 20,
      quantity: 0,
      about: 'this is natural butter, and healthy milk',
      image: 'https://www.istockphoto.com/photos/milk',
      delivery: 'Free',
    },
    {
      name: 'ghey',
      id: 'i3',
      price: 20,
      quantity: 0,
      about: 'this is natural ghey, and healthy milk',
      image: 'https://www.istockphoto.com/photos/milk',
      delivery: 'Free',
    },
  ];
  return (
    <div className="menu-container">
      <h2>Our Menus</h2>
      <div className="menuitem-container">
        {products.map((item) => {
          return (
            <MenuItem
              id={item.id}
              name={item.name}
              image={item.image}
              price={item.price}
              about={item.about}
              delivery={item.delivery}
            />
          );
        })}
      </div>
    </div>
  );
};

export default MenuPage;
