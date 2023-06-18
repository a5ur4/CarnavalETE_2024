import React from "react";
import {
  Text,
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
  FlatList,
} from "react-native";

const Secondlist = () => {
  const blocks = [
    {
      id: 1,
      backgroundImage:
        "https://cdn.folhape.com.br/img/c/1200/900/dn_arquivo/2020/07/galo-2019.jpg",
      text: "- Galo da madrugada- ",
      info: "07:00 - 18:30 \n      04/02",
    },
    {
      id: 2,
      backgroundImage:
        "https://cdn.folhape.com.br/img/pc/1100/1/dn_arquivo/2020/02/homemmeia1102.jpg",
      text: "- Homem da meia noite -",
      info: "18:30 - 00:00 \n      07/02",
    },
    {
      id: 3,
      backgroundImage:
        "https://imagens.ne10.uol.com.br/img/imagens/2020/02/23/02c3d4571c_galeria4.jpg",
      text: "- Papangus de Bezerros -",
      info: "07:00 - 18:30 \n     10/02",
    },
    {
      id: 4,
      backgroundImage:
        "https://4.bp.blogspot.com/-GoqFO0i6s7Y/VrJACigG8YI/AAAAAAAAT0Q/91TwysGkEw4/s1600/Bonecos+gigantes+de+Olinda.jpg",
      text: "- Bonecos gigantes de olinda -",
      info: "09:00 - 15:30 \n     14/02",
    },
  ];

  const renderBlock = ({ item }) => (
    <View style={styles.block}>
      <Image
        source={{ uri: item.backgroundImage }}
        style={styles.backgroundImage}
      />
      <View style={styles.content}>
        <Text style={styles.text}>{item.text}</Text>
        <Text style={styles.info}>{item.info}</Text>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Saiba mais</Text>
        </TouchableOpacity>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={styles.eventTitle}>
        <Image
          source={{
            uri: "https://cdn-icons-png.flaticon.com/512/4442/4442485.png",
          }}
          style={styles.mask}
        />
        <Text style={styles.eventText}>
          Eventos
        </Text>
      </View>
      <FlatList
        data={blocks}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderBlock}
        contentContainerStyle={styles.listContent}
      />
      <TouchableOpacity style={styles.seeMorebutton}>
        <Text style={styles.seeMore}>Veja mais ➝</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#551956",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    borderColor: "#F9CD0F",
    borderTopWidth: 5,
    marginTop: 20,
    borderRightWidth: 0.1,
    borderLeftWidth: 0.1
  },
  eventTitle: {
    alignItems: "center",
    marginBottom: 20,
    marginTop: 10
  },
  eventText :{
    color: "#F9CD0F",
    fontSize: 27,
    fontWeight: "bold",
  },
  mask: {
    height: 60,
    width: 60,
  },
  listContent: {
    alignItems: "center",
    paddingHorizontal: 10,
    paddingBottom: 5,
  },
  block: {
    width: 310,
    height: 180,
    borderRadius: 10,
    overflow: "hidden",
    marginBottom: 25,
    borderColor: "#F9CD0F",
    borderLeftWidth: 5,
    borderRightWidth: 5,
  },
  backgroundImage: {
    flex: 1,
    resizeMode: "cover",
  },
  content: {
    position: "absolute",
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    justifyContent: "space-between",
    alignItems: "center",
    padding: 10,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  text: {
    fontSize: 17,
    color: "#ffffff",
    marginBottom: 10,
    fontWeight: "bold",
  },
  info: {
    fontSize: 15,
    color: "#ffffff",
  },
  button: {
    backgroundColor: "#F9CD0F",
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 10,
    width: 150,
    alignItems: "center",
    height: 30,
  },
  buttonText: {
    color: "#000000",
    fontWeight: "bold",
    fontSize: 14,
    marginTop: -3,
  },
  seeMorebutton: {
    paddingBottom: 40,
    alignItems: "center",
  },
  seeMore: {
    color: "#F9CD0F",
    fontWeight: "bold",
    fontSize: 14,
  },
});

export default Secondlist;