const initialImages = [
  {
    "urls": {
      "raw": "https://images.unsplash.com/photo-1559511260-66a654ae982a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjE0MzAyN30",
      "full": "https://images.unsplash.com/photo-1559511260-66a654ae982a?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&ixid=eyJhcHBfaWQiOjE0MzAyN30",
      "regular": "https://images.unsplash.com/photo-1559511260-66a654ae982a?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjE0MzAyN30",
      "small": "https://images.unsplash.com/photo-1559511260-66a654ae982a?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0MzAyN30",
      "thumb": "https://images.unsplash.com/photo-1559511260-66a654ae982a?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&ixid=eyJhcHBfaWQiOjE0MzAyN30"
    }
  },
  {
    "urls": {
      "raw": "https://images.unsplash.com/photo-1560813962-ff3d8fcf59ba?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjE0MzAyN30",
      "full": "https://images.unsplash.com/photo-1560813962-ff3d8fcf59ba?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&ixid=eyJhcHBfaWQiOjE0MzAyN30",
      "regular": "https://images.unsplash.com/photo-1560813962-ff3d8fcf59ba?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjE0MzAyN30",
      "small": "https://images.unsplash.com/photo-1560813962-ff3d8fcf59ba?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0MzAyN30",
      "thumb": "https://images.unsplash.com/photo-1560813962-ff3d8fcf59ba?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&ixid=eyJhcHBfaWQiOjE0MzAyN30"
    }
  },
  {
    "urls": {
      "raw": "https://images.unsplash.com/photo-1519181258491-889c2b001485?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjE0MzAyN30",
      "full": "https://images.unsplash.com/photo-1519181258491-889c2b001485?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&ixid=eyJhcHBfaWQiOjE0MzAyN30",
      "regular": "https://images.unsplash.com/photo-1519181258491-889c2b001485?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjE0MzAyN30",
      "small": "https://images.unsplash.com/photo-1519181258491-889c2b001485?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0MzAyN30",
      "thumb": "https://images.unsplash.com/photo-1519181258491-889c2b001485?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&ixid=eyJhcHBfaWQiOjE0MzAyN30"
    }
  },
  {
    "urls": {
      "raw": "https://images.unsplash.com/photo-1519331582073-283f1a211a3e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjE0MzAyN30",
      "full": "https://images.unsplash.com/photo-1519331582073-283f1a211a3e?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&ixid=eyJhcHBfaWQiOjE0MzAyN30",
      "regular": "https://images.unsplash.com/photo-1519331582073-283f1a211a3e?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjE0MzAyN30",
      "small": "https://images.unsplash.com/photo-1519331582073-283f1a211a3e?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0MzAyN30",
      "thumb": "https://images.unsplash.com/photo-1519331582073-283f1a211a3e?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&ixid=eyJhcHBfaWQiOjE0MzAyN30"
    }
  },
  {
    "urls": {
      "raw": "https://images.unsplash.com/photo-1560814304-4f05b62af116?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjE0MzAyN30",
      "full": "https://images.unsplash.com/photo-1560814304-4f05b62af116?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&ixid=eyJhcHBfaWQiOjE0MzAyN30",
      "regular": "https://images.unsplash.com/photo-1560814304-4f05b62af116?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjE0MzAyN30",
      "small": "https://images.unsplash.com/photo-1560814304-4f05b62af116?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0MzAyN30",
      "thumb": "https://images.unsplash.com/photo-1560814304-4f05b62af116?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&ixid=eyJhcHBfaWQiOjE0MzAyN30"
    }
  },
  {
    "urls": {
      "raw": "https://images.unsplash.com/photo-1515884045391-a9e471f4d36f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjE0MzAyN30",
      "full": "https://images.unsplash.com/photo-1515884045391-a9e471f4d36f?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&ixid=eyJhcHBfaWQiOjE0MzAyN30",
      "regular": "https://images.unsplash.com/photo-1515884045391-a9e471f4d36f?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjE0MzAyN30",
      "small": "https://images.unsplash.com/photo-1515884045391-a9e471f4d36f?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0MzAyN30",
      "thumb": "https://images.unsplash.com/photo-1515884045391-a9e471f4d36f?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&ixid=eyJhcHBfaWQiOjE0MzAyN30"
    }
  },
  {
    "urls": {
      "raw": "https://images.unsplash.com/photo-1544161513-0179fe746fd5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjE0MzAyN30",
      "full": "https://images.unsplash.com/photo-1544161513-0179fe746fd5?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&ixid=eyJhcHBfaWQiOjE0MzAyN30",
      "regular": "https://images.unsplash.com/photo-1544161513-0179fe746fd5?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjE0MzAyN30",
      "small": "https://images.unsplash.com/photo-1544161513-0179fe746fd5?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0MzAyN30",
      "thumb": "https://images.unsplash.com/photo-1544161513-0179fe746fd5?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&ixid=eyJhcHBfaWQiOjE0MzAyN30"
    }
  },
  {
    "urls": {
      "raw": "https://images.unsplash.com/photo-1531610373189-61a2afd654e4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjE0MzAyN30",
      "full": "https://images.unsplash.com/photo-1531610373189-61a2afd654e4?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&ixid=eyJhcHBfaWQiOjE0MzAyN30",
      "regular": "https://images.unsplash.com/photo-1531610373189-61a2afd654e4?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjE0MzAyN30",
      "small": "https://images.unsplash.com/photo-1531610373189-61a2afd654e4?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0MzAyN30",
      "thumb": "https://images.unsplash.com/photo-1531610373189-61a2afd654e4?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&ixid=eyJhcHBfaWQiOjE0MzAyN30"
    }
  },
  {
    "urls": {
      "raw": "https://images.unsplash.com/photo-1522108012948-ba44e922ba8d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjE0MzAyN30",
      "full": "https://images.unsplash.com/photo-1522108012948-ba44e922ba8d?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&ixid=eyJhcHBfaWQiOjE0MzAyN30",
      "regular": "https://images.unsplash.com/photo-1522108012948-ba44e922ba8d?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjE0MzAyN30",
      "small": "https://images.unsplash.com/photo-1522108012948-ba44e922ba8d?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0MzAyN30",
      "thumb": "https://images.unsplash.com/photo-1522108012948-ba44e922ba8d?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&ixid=eyJhcHBfaWQiOjE0MzAyN30"
    }
  },
  {
    "urls": {
      "raw": "https://images.unsplash.com/photo-1571864156103-d3c37503b6af?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjE0MzAyN30",
      "full": "https://images.unsplash.com/photo-1571864156103-d3c37503b6af?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&ixid=eyJhcHBfaWQiOjE0MzAyN30",
      "regular": "https://images.unsplash.com/photo-1571864156103-d3c37503b6af?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjE0MzAyN30",
      "small": "https://images.unsplash.com/photo-1571864156103-d3c37503b6af?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0MzAyN30",
      "thumb": "https://images.unsplash.com/photo-1571864156103-d3c37503b6af?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&ixid=eyJhcHBfaWQiOjE0MzAyN30"
    }
  },
  {
    "urls": {
      "raw": "https://images.unsplash.com/photo-1544161497-6095fb868d58?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjE0MzAyN30",
      "full": "https://images.unsplash.com/photo-1544161497-6095fb868d58?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&ixid=eyJhcHBfaWQiOjE0MzAyN30",
      "regular": "https://images.unsplash.com/photo-1544161497-6095fb868d58?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjE0MzAyN30",
      "small": "https://images.unsplash.com/photo-1544161497-6095fb868d58?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0MzAyN30",
      "thumb": "https://images.unsplash.com/photo-1544161497-6095fb868d58?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&ixid=eyJhcHBfaWQiOjE0MzAyN30"
    }
  },
  {
    "urls": {
      "raw": "https://images.unsplash.com/photo-1572288717056-ea97fb77c71e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjE0MzAyN30",
      "full": "https://images.unsplash.com/photo-1572288717056-ea97fb77c71e?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&ixid=eyJhcHBfaWQiOjE0MzAyN30",
      "regular": "https://images.unsplash.com/photo-1572288717056-ea97fb77c71e?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjE0MzAyN30",
      "small": "https://images.unsplash.com/photo-1572288717056-ea97fb77c71e?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0MzAyN30",
      "thumb": "https://images.unsplash.com/photo-1572288717056-ea97fb77c71e?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&ixid=eyJhcHBfaWQiOjE0MzAyN30"
    }
  }
];

export default initialImages;
