import * as React from "react";
import { StyleSheet, View, Image, Text } from "react-native";
import { FontSize, Color, FontFamily, Border } from "../GlobalStyles";

const GroceryHome = () => {
  return (
    <View style={styles.groceryHome}>
      <View style={[styles.card, styles.cardLayout1]}>
        <View style={[styles.cardChild, styles.cardLayout1]} />
        <Image
          style={styles.imageIcon4}
          resizeMode="cover"
          source={require("../assets/image-icon.png")}
        />
        <View style={[styles.card1, styles.cardPosition2]}>
          <Text style={[styles.text8, styles.textTypo]}>$325</Text>
          <Text style={[styles.clownTangh03, styles.fishh03Typo]}>
            Clown Tang.H03
          </Text>
          <View style={[styles.cardInner, styles.cardInnerLayout]}>
            <View style={[styles.groupChild, styles.groupChildFlexBox]} />
          </View>
          <Image
            style={[styles.cardItem, styles.cardChildLayout1]}
            resizeMode="cover"
            source={require("../assets/group-32.png")}
          />
        </View>
      </View>
      <View style={[styles.card2, styles.cardPosition]}>
        <View style={[styles.cardChild, styles.cardLayout1]} />
        <Image
          style={styles.imageIcon4}
          resizeMode="cover"
          source={require("../assets/image-icon.png")}
        />
        <View style={[styles.card3, styles.cardPosition2]}>
          <Text style={[styles.text9, styles.textTypo]}>$325</Text>
          <Text style={[styles.fishh03, styles.fishh03Typo]}>Fish.H03</Text>
          <View style={[styles.groupView, styles.cardInnerLayout]}>
            <View style={[styles.groupChild, styles.groupChildFlexBox]} />
          </View>
          <Image
            style={[styles.cardChild1, styles.cardChildLayout1]}
            resizeMode="cover"
            source={require("../assets/group-32.png")}
          />
        </View>
      </View>
      <View style={[styles.card4, styles.cardPosition]}>
        <View style={[styles.cardChild, styles.cardLayout1]} />
        <Image
          style={styles.imageIcon4}
          resizeMode="cover"
          source={require("../assets/image-icon.png")}
        />
        <View style={[styles.card1, styles.cardPosition2]}>
          <Text style={[styles.text8, styles.textTypo]}>$89</Text>
          <Text style={[styles.clownfishh03, styles.goldFishh03Typo]}>
            Clownfish.H03
          </Text>
          <View style={[styles.cardInner, styles.cardInnerLayout]}>
            <View style={[styles.groupChild, styles.groupChildFlexBox]} />
          </View>
          <Image
            style={[styles.cardItem, styles.cardChildLayout1]}
            resizeMode="cover"
            source={require("../assets/group-32.png")}
          />
        </View>
      </View>
      <View style={[styles.card6, styles.cardLayout1]}>
        <View style={[styles.cardChild, styles.cardLayout1]} />
        <Image
          style={styles.imageIcon4}
          resizeMode="cover"
          source={require("../assets/image-icon.png")}
        />
        <View style={[styles.card3, styles.cardPosition2]}>
          <Text style={[styles.text9, styles.textTypo]}>$89</Text>
          <Text style={[styles.goldFishh03, styles.goldFishh03Typo]}>
            Gold Fish.H03
          </Text>
          <View style={[styles.groupView, styles.cardInnerLayout]}>
            <View style={[styles.groupChild, styles.groupChildFlexBox]} />
          </View>
          <Image
            style={[styles.cardChild1, styles.cardChildLayout1]}
            resizeMode="cover"
            source={require("../assets/group-32.png")}
          />
        </View>
      </View>
      <View style={styles.bg2} />
      <Text style={styles.title}>Recommended</Text>
      <View style={styles.bannerCard}>
        <View style={[styles.card8, styles.cardLayout]}>
          <View style={[styles.cardChild6, styles.cardChildLayout]} />
          <Text style={[styles.get, styles.getTypo]}>Get</Text>
          <Text style={[styles.onFirst03Container, styles.getPosition]}>
            <Text style={styles.getTypo}>{`On first `}</Text>
            <Text style={styles.text12Typo}>03</Text>
            <Text style={styles.getTypo}> order</Text>
          </Text>
          <Text style={[styles.off, styles.offTypo]}>50% OFF</Text>
          <Image
            style={[styles.card8, styles.cardLayout]}
            resizeMode="cover"
            source={require("../assets/mask-group.png")}
          />
        </View>
        <View style={[styles.card9, styles.cardLayout]}>
          <View style={[styles.cardChild7, styles.cardChildLayout]} />
          <Text style={[styles.get, styles.getTypo]}>Get</Text>
          <Text style={[styles.onFirst03Container, styles.getPosition]}>
            <Text style={styles.getTypo}>{`On first `}</Text>
            <Text style={styles.text12Typo}>03</Text>
            <Text style={styles.getTypo}> order</Text>
          </Text>
          <Text style={[styles.off, styles.offTypo]}>50% OFF</Text>
          <Image
            style={[styles.card8, styles.cardLayout]}
            resizeMode="cover"
            source={require("../assets/mask-group1.png")}
          />
        </View>
      </View>
      <View style={[styles.text14, styles.textParentLayout]}>
        <View style={[styles.deliveryToParent, styles.textParentLayout]}>
          <Text style={[styles.deliveryTo, styles.heyRahulClr]}>
            Delivery to
          </Text>
          <View style={[styles.greenWay3000SylhetParent, styles.getPosition1]}>
            <Text style={[styles.greenWay30001, styles.heyRahulClr]}>
              Green Way 3000, Sylhet
            </Text>
            <Image
              style={styles.arrowIocnIcon1}
              resizeMode="cover"
              source={require("../assets/arrow-iocn.png")}
            />
          </View>
        </View>
        <View style={[styles.textParent, styles.textParentLayout]}>
          <Text style={[styles.deliveryTo, styles.heyRahulClr]}>Within</Text>
          <View style={[styles.greenWay3000SylhetParent, styles.getPosition1]}>
            <Text style={[styles.greenWay30001, styles.heyRahulClr]}>
              1 Hour
            </Text>
            <Image
              style={styles.arrowIocnIcon1}
              resizeMode="cover"
              source={require("../assets/arrow-iocn.png")}
            />
          </View>
        </View>
      </View>
      <View style={[styles.searchBar, styles.bg3Layout]}>
        <View style={[styles.bg3, styles.bg3Layout]} />
        <Image
          style={styles.searchIcon1}
          resizeMode="cover"
          source={require("../assets/search-icon.png")}
        />
        <Text style={[styles.text17, styles.moreTypo]}>
          Search Products or store
        </Text>
      </View>
      <View style={styles.heyRahulParent}>
        <Text style={[styles.heyRahul, styles.heyRahulClr]}>Hey, Rahul</Text>
        <View style={[styles.cartIcon, styles.cardChildLayout1]}>
          <Image
            style={styles.bagIcon1}
            resizeMode="cover"
            source={require("../assets/bag.png")}
          />
          <View style={[styles.ellipseParent, styles.cardChildLayout1]}>
            <Image
              style={[styles.groupChild1, styles.cardChildLayout1]}
              resizeMode="cover"
              source={require("../assets/ellipse-3.png")}
            />
            <Text style={[styles.text18, styles.moreFlexBox]}>3</Text>
          </View>
        </View>
      </View>
      <View style={styles.tabBar}>
        <Image
          style={styles.subtractIcon}
          resizeMode="cover"
          source={require("../assets/subtract.png")}
        />
        <Image
          style={[styles.homeIconAndText1, styles.bg3Layout]}
          resizeMode="cover"
          source={require("../assets/home-icon-and-text.png")}
        />
        <View style={[styles.moreIconAndText1, styles.iconLayout]}>
          <Text style={[styles.more, styles.moreFlexBox]}>More</Text>
          <Image
            style={[styles.menuMoreVertical1, styles.cardChildLayout1]}
            resizeMode="cover"
            source={require("../assets/menu--more-vertical.png")}
          />
        </View>
        <View style={[styles.favouriteIconAndText1, styles.iconLayout]}>
          <Text style={[styles.more, styles.moreFlexBox]}>Favourite</Text>
          <Image
            style={[
              styles.iconlytwoToneheart,
              styles.iconlytwoToneheartPosition,
            ]}
            resizeMode="cover"
            source={require("../assets/iconlytwotoneheart.png")}
          />
        </View>
        <View style={[styles.categoriesIconAndText1, styles.iconLayout]}>
          <Text style={[styles.more, styles.moreFlexBox]}>Categories</Text>
          <Image
            style={[
              styles.iconlycurvedcategory,
              styles.iconlytwoToneheartPosition,
            ]}
            resizeMode="cover"
            source={require("../assets/iconlycurvedcategory.png")}
          />
        </View>
      </View>
      <Image
        style={[styles.vectorIcon2, styles.vectorIconLayout]}
        resizeMode="cover"
        source={require("../assets/vector.png")}
      />
      <Image
        style={[styles.vectorIcon3, styles.vectorIconLayout]}
        resizeMode="cover"
        source={require("../assets/vector1.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  cardLayout1: {
    height: 194,
    width: 160,
    position: "absolute",
  },
  cardPosition2: {
    width: 128,
    left: 17,
    position: "absolute",
  },
  textTypo: {
    textAlign: "left",
    fontSize: FontSize.body02SemiBold14_size,
  },
  fishh03Typo: {
    width: 112,
    color: Color.greyScaleBlack02,
    lineHeight: 16,
    fontFamily: FontFamily.heading01Regular30,
    letterSpacing: 0.2,
    fontSize: FontSize.labelRegular12_size,
    textAlign: "left",
    left: 0,
    position: "absolute",
  },
  cardInnerLayout: {
    height: 19,
    position: "absolute",
  },
  groupChildFlexBox: {
    alignItems: "center",
    left: 0,
  },
  cardChildLayout1: {
    height: 24,
    width: 24,
    position: "absolute",
  },
  cardPosition: {
    left: 195,
    height: 194,
    width: 160,
    position: "absolute",
  },
  goldFishh03Typo: {
    width: 123,
    color: Color.greyScaleBlack02,
    fontFamily: FontFamily.heading01Regular30,
    lineHeight: 16,
    letterSpacing: 0.2,
    fontSize: FontSize.labelRegular12_size,
    textAlign: "left",
    left: 0,
    position: "absolute",
  },
  cardLayout: {
    width: 269,
    height: 123,
    top: 0,
    position: "absolute",
  },
  cardChildLayout: {
    borderRadius: Border.br_base,
    width: 269,
    height: 123,
    left: 0,
    top: 0,
    position: "absolute",
  },
  getTypo: {
    fontFamily: FontFamily.manropeLight,
    fontWeight: "300",
  },
  getPosition: {
    left: 134,
    color: Color.colorWhite,
    textAlign: "left",
  },
  offTypo: {
    fontFamily: FontFamily.manropeExtraBold,
    fontWeight: "800",
    position: "absolute",
  },
  textParentLayout: {
    height: 38,
    position: "absolute",
  },
  heyRahulClr: {
    color: Color.greyScaleBlack05,
    textAlign: "left",
  },
  getPosition1: {
    top: 19,
    position: "absolute",
  },
  bg3Layout: {
    height: 56,
    position: "absolute",
  },
  moreTypo: {
    color: Color.greyScaleBlack03,
    fontFamily: FontFamily.manropeMedium,
    fontWeight: "500",
  },
  moreFlexBox: {
    textAlign: "center",
    position: "absolute",
  },
  iconLayout: {
    height: 41,
    position: "absolute",
  },
  iconlytwoToneheartPosition: {
    bottom: "41.46%",
    top: "0%",
    height: "58.54%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  vectorIconLayout: {
    bottom: "37.76%",
    top: "60.59%",
    width: "3.88%",
    height: "1.64%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  cardChild: {
    borderRadius: Border.br_xs,
    backgroundColor: Color.greyScaleBlack05,
    left: 0,
    top: 0,
  },
  imageIcon4: {
    top: 20,
    left: 43,
    width: 68,
    height: 68,
    opacity: 0.6,
    position: "absolute",
    overflow: "hidden",
  },
  text8: {
    color: Color.greyScaleBlack,
    lineHeight: 20,
    textAlign: "left",
    fontFamily: FontFamily.body02SemiBold14,
    fontWeight: "600",
    left: 0,
    position: "absolute",
    top: 44,
  },
  clownTangh03: {
    top: 68,
  },
  groupChild: {
    justifyContent: "flex-end",
    top: 0,
    position: "absolute",
  },
  cardInner: {
    width: 23,
    left: 14,
    height: 19,
    top: 0,
  },
  cardItem: {
    left: 104,
    width: 24,
    top: 44,
  },
  card1: {
    top: 90,
    height: 84,
  },
  card: {
    left: 20,
    top: 479,
  },
  text9: {
    top: 47,
    color: Color.greyScaleBlack,
    lineHeight: 20,
    textAlign: "left",
    fontFamily: FontFamily.body02SemiBold14,
    fontWeight: "600",
    left: 0,
    position: "absolute",
  },
  fishh03: {
    top: 71,
  },
  groupView: {
    top: 3,
    width: 23,
    left: 14,
    height: 19,
  },
  cardChild1: {
    left: 104,
    width: 24,
    top: 0,
  },
  card3: {
    top: 87,
    height: 87,
  },
  card2: {
    top: 695,
  },
  clownfishh03: {
    top: 68,
  },
  card4: {
    top: 479,
  },
  goldFishh03: {
    top: 71,
  },
  card6: {
    top: 695,
    left: 20,
  },
  bg2: {
    backgroundColor: "#2a4ba0",
    width: 376,
    height: 252,
    left: 0,
    top: 0,
    position: "absolute",
  },
  title: {
    top: 429,
    fontSize: FontSize.heading01Regular30_size,
    lineHeight: 38,
    fontFamily: FontFamily.heading01Regular30,
    textAlign: "left",
    color: Color.greyScaleBlack,
    left: 20,
    position: "absolute",
  },
  cardChild6: {
    backgroundColor: "#f9b023",
  },
  get: {
    fontSize: FontSize.size_xl,
    width: 34,
    height: 29,
    color: Color.colorWhite,
    left: 134,
    textAlign: "left",
    top: 19,
    position: "absolute",
  },
  text12Typo: {
    fontFamily: FontFamily.manropeMedium,
    fontWeight: "500",
  },
  onFirst03Container: {
    top: 80,
    fontSize: FontSize.size_smi,
    width: 96,
    color: Color.colorWhite,
    height: 19,
    position: "absolute",
  },
  off: {
    fontSize: FontSize.size_7xl,
    width: 114,
    height: 39,
    color: Color.colorWhite,
    left: 134,
    textAlign: "left",
    top: 44,
  },
  card8: {
    left: 0,
  },
  cardChild7: {
    backgroundColor: "#e4ddcb",
  },
  card9: {
    left: 287,
  },
  bannerCard: {
    top: 279,
    width: 556,
    height: 123,
    left: 20,
    position: "absolute",
  },
  deliveryTo: {
    fontSize: FontSize.size_2xs,
    textTransform: "uppercase",
    opacity: 0.5,
    fontFamily: FontFamily.manropeExtraBold,
    fontWeight: "800",
    position: "absolute",
    letterSpacing: 0.2,
    color: Color.greyScaleBlack05,
    left: 0,
    top: 0,
  },
  greenWay30001: {
    fontFamily: FontFamily.manropeMedium,
    fontWeight: "500",
    fontSize: FontSize.body02SemiBold14_size,
  },
  arrowIocnIcon1: {
    width: 8,
    height: 5,
    marginLeft: 10,
  },
  greenWay3000SylhetParent: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    left: 0,
  },
  deliveryToParent: {
    width: 174,
    left: 0,
    top: 0,
  },
  textParent: {
    left: 278,
    width: 58,
    top: 0,
  },
  text14: {
    top: 202,
    width: 336,
    left: 20,
  },
  bg3: {
    borderRadius: 28,
    backgroundColor: "#153075",
    width: 335,
    height: 56,
    left: 0,
    top: 0,
  },
  searchIcon1: {
    height: "32.14%",
    width: "5.37%",
    top: "33.93%",
    right: "86.27%",
    bottom: "33.93%",
    left: "8.36%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  text17: {
    left: 58,
    top: 19,
    position: "absolute",
    textAlign: "left",
    fontSize: FontSize.body02SemiBold14_size,
  },
  searchBar: {
    top: 117,
    width: 335,
    height: 56,
    left: 20,
  },
  heyRahul: {
    fontSize: 22,
    fontFamily: FontFamily.body02SemiBold14,
    fontWeight: "600",
    left: 0,
    top: 0,
    position: "absolute",
  },
  bagIcon1: {
    left: 3,
    width: 18,
    height: 20,
    top: 2,
    position: "absolute",
  },
  groupChild1: {
    left: 0,
    top: 0,
  },
  text18: {
    left: 7,
    top: 2,
    color: Color.colorWhite,
    fontFamily: FontFamily.body02SemiBold14,
    fontWeight: "600",
    fontSize: FontSize.body02SemiBold14_size,
  },
  ellipseParent: {
    top: -7,
    left: 9,
  },
  cartIcon: {
    top: 1,
    left: 315,
  },
  heyRahulParent: {
    top: 52,
    width: 339,
    height: 30,
    left: 20,
    position: "absolute",
  },
  subtractIcon: {
    borderRadius: 4,
    height: 144,
    width: 375,
  },
  homeIconAndText1: {
    left: 29,
    width: 56,
    top: 0,
  },
  more: {
    top: 25,
    color: Color.greyScaleBlack03,
    fontFamily: FontFamily.manropeMedium,
    fontWeight: "500",
    fontSize: FontSize.labelRegular12_size,
    textAlign: "center",
    left: 0,
  },
  menuMoreVertical1: {
    left: 2,
    top: 0,
    overflow: "hidden",
  },
  moreIconAndText1: {
    left: 304,
    width: 29,
    top: 31,
    height: 41,
  },
  iconlytwoToneheart: {
    width: "45.28%",
    right: "30.19%",
    left: "24.53%",
  },
  favouriteIconAndText1: {
    left: 205,
    width: 53,
    top: 31,
    height: 41,
  },
  iconlycurvedcategory: {
    width: "38.1%",
    right: "31.75%",
    left: "30.16%",
  },
  categoriesIconAndText1: {
    top: 30,
    left: 113,
    width: 63,
  },
  tabBar: {
    top: 709,
    height: 103,
    width: 375,
    left: 0,
    position: "absolute",
  },
  vectorIcon2: {
    right: "87.32%",
    left: "8.8%",
  },
  vectorIcon3: {
    right: "40.65%",
    left: "55.47%",
  },
  groceryHome: {
    borderRadius: 25,
    backgroundColor: Color.colorWhite,
    flex: 1,
    width: "100%",
    height: 812,
    overflow: "hidden",
  },
});

export default GroceryHome;
