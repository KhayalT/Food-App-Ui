import React from 'react';
import {View, Text, FlatList} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import categories from '../../../constant/categories';
import CategoryItem from '../CategoryItem';
import COLORS from '../../../constant/colors';
import SearchHeader from '../SearchHeader';
import HeaderTop from '../../components/HeaderTop';

class CategoryList extends React.Component {
  constructor (props) {
    super (props);
    this.state = {selectedItem: null};
  }
  onPressHandler (id) {
    this.setState ({selectedItem: id});
  }
  render () {
    return (
      <View>
        <HeaderTop />
        <SearchHeader />
        <FlatList
          data={categories}
          renderItem={({item}) => (
            <TouchableOpacity onPress={() => this.onPressHandler (item.id)}>
              <CategoryItem
                category={item}
                color={
                  this.state.selectedItem === item.id
                    ? COLORS.primary
                    : COLORS.secondary
                }
              />
            </TouchableOpacity>
          )}
          keyExtractor={item => item.id}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
        />
      </View>
    );
  }
}

export default CategoryList;
