type CategoryItemType = {
  name: string;
  slug: string;
  children?: CategoryListType;
};

type CategoryListType = CategoryItemType[];

const categories: CategoryListType = [
  {
    name: 'Web',
    slug: 'web',
    children: [
      {
        name: 'Frontend',
        slug: 'frontend',
      },
      {
        name: 'Backend',
        slug: 'backend',
      },
    ],
  },
  {
    name: '통계',
    slug: 'stat',
  },
];

const Aside = () => {
  return (
    <aside>
      <nav>
        <ul></ul>
      </nav>
    </aside>
  );
};

export { Aside };
