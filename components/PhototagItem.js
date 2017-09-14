import React from 'React';
import { View, Text, Image, StyleSheet, TouchableHighlight } from 'react-native';
import TaggedText from './TaggedText';
import IconBadge from 'react-native-icon-badge';
import AppStyles from '../styles/AppStyles';

class PhototagItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={AppStyles.container}>
        <View
          style={{
            alignSelf: 'flex-end',
            marginTop: -5,
            position: 'absolute',
          }}>
          <IconBadge
            MainElement={
              <View
                style={AppStyles.iconBadgeMain}
              />
            }
            BadgeElement={<Text style={{ color: '#000' }}>{this.props.badges}</Text>}
            IconBadgeStyle={AppStyles.iconBadgeStyle}
            Hidden={!this.props.badges || this.props.badges === 0}
          />
        </View>
        <TouchableHighlight
          onPress={() => {
            if (this.props.decreaseBadges) {
              this.props.decreaseBadges(this.props.phototag.badges);
              this.props.deleteBadges(this.props.phototag);
            }
            this.props.goToPhototags();
          }}
          style={{ width: '100%', height: 200 }}>
          <Image style={AppStyles.imageStyle} source={{ uri: this.props.phototag.imageUrl }} />
        </TouchableHighlight>
        <TaggedText navigation={this.props.navigation} text={this.props.phototag.description} />
      </View>
    );
  }
}


// <Text>
// Location: {this.props.phototag.locationLat}, {this.props.phototag.locationLong}
// </Text>
export default PhototagItem;
