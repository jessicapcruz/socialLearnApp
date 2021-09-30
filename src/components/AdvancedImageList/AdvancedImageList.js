import React from 'react';
import ImageList from '@material-ui/core/ImageList';
import ImageListItem from '@material-ui/core/ImageListItem';
import ImageListItemBar from '@material-ui/core/ImageListItemBar';

import useStyles from './AdvancedImageListStyles';
import itemData from './ItemData';

export default function AdvancedImageList() {
    const classes = useStyles();
  
    return (
      <div className={classes.root}>
        <ImageList rowHeight={200} gap={5} className={classes.imageList} cols={4}>
          {itemData.map((item) => (
            <ImageListItem key={item.img} cols={item.featured ? 2 : 1} rows={item.featured ? 2 : 1}>
              <img src={item.img} alt={item.title} />
              <ImageListItemBar
                title={item.title}
                subtitle={item.subtitle}
                actionPosition="left"
                className={classes.titleBar}
              />
            </ImageListItem>
          ))}
        </ImageList>
      </div>
    );
}