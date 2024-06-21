import { StyleSheet, Text, View, FlatList } from "react-native";
import React from "react";
import NetflixCard from "../components/NetflixCard";

const NetflixData = [
  {
    image:
      "https://m.media-amazon.com/images/M/MV5BN2VjYzIxN2ItN2E0MS00ODE4LThjMTgtMzE2OTM0ZmM4YjBmXkEyXkFqcGdeQXVyMTc0OTI3NjUy._V1_FMjpg_UX1000_.jpg",
    name: "Bade Miyan Chote Miyan",
    desc: "A comedic action film featuring two bumbling police officers who must save the day.",
    trailer: "https://www.youtube.com/watch?v=z2IS4s1Ce1s",
  },
  {
    image:
      "https://www.filmibeat.com/ph-big/2015/07/drishyam-poster_143694542700.jpg",
    name: "Drishyam",
    desc: "A suspenseful thriller about a man who goes to great lengths to protect his family after a crime.",
    trailer: "https://www.youtube.com/watch?v=AuuX2j14NBg",
  },
  {
    image:
      "https://i.pinimg.com/originals/d6/b1/0e/d6b10e72360eaffff9a329f3b6a9cbb1.jpg",
    name: "Pink",
    desc: "A  drama highlighting three young women fighting against  society with the help of a retired lawyer.",
    trailer: "https://www.youtube.com/watch?v=AL2TShb6fFs",
  },
  {
    image:
      "http://2.bp.blogspot.com/-SH1leBipJvA/VeLWvgIzq7I/AAAAAAAAaEk/yZ9nHzgcBu8/s1600/1398418494_queenfront1%2B%25281%2529.jpg",
    name: "Queen",
    desc: "A woman embarks on a solo honeymoon trip across Europe, rediscovering herself and her independence.",
    trailer: "https://www.youtube.com/watch?v=KGC6vl3lzf0",
  },
  {
    image:
      "https://www.boxofficegallery.com/imgposter/rajma-chawal-poster-227294031.jpg",
    name: "Rajma Chawal",
    desc: "A  comedy about a father who creates a fake social media profile to reconnect with his estranged son.",
    trailer: "https://www.youtube.com/watch?v=oMSg6g70m_I",
  },
  {
    image:
      "https://m.media-amazon.com/images/M/MV5BN2ZmZGM4NTYtMGRmYS00YjYyLTgxYjAtODllMzdmNDdkZTE0XkEyXkFqcGdeQXVyMTEzMTI1Mjk3._V1_FMjpg_UX1000_.jpg",
    name: "Chakda 'Xpress",
    desc: "A sports drama based on the life of cricketer Jhulan Goswami, highlighting her journey against all odds.",
    trailer: "https://www.youtube.com/watch?v=5jHNDjXNxaI",
  },
  {
    image:
      "https://pics.filmaffinity.com/baahubali_the_beginning_aka_bahubali_the_beginning-989063887-large.jpg",
    name: "Baahubali: The Beginning",
    desc: "An epic historical fiction film featuring the story of a brave warrior and his quest to uncover his true legacy.",
    trailer: "https://www.youtube.com/watch?v=sOEg_YZQsTI",
  },
  {
    image:
      "https://pics.filmaffinity.com/baahubali_2_the_conclusion-120474739-large.jpg",
    name: "Baahubali 2: The Conclusion",
    desc: "The continuation of the epic saga, revealing the dramatic conclusion to the story of the warrior.",
    trailer: "https://www.youtube.com/watch?v=G62HrubdD6o",
  },
  {
    image:
      "https://www.filmibeat.com/imgh/560x292/2014/12/exclusive-first-look-of-pk_141838247000.jpg",
    name: "PK",
    desc: "A comedic drama about an alien who questions religious dogmas and superstitions on Earth.",
    trailer: "https://www.youtube.com/watch?v=SOXWc32k4zA",
  },
  {
    image:
      "https://images.justwatch.com/poster/300551636/s718/masaan.%7Bformat%7D",
    name: "Masaan",
    desc: "A poignant film depicting two parallel stories of loss and societal pressures in India.",
    trailer: "https://www.youtube.com/watch?v=IVb16p-3vgI",
  },
];

export default function SecondChallenge() {
  return (
    <View style={styles.headStyle}>
      <View>
        <Text style={styles.textStyle1}>Netflix</Text>
        <Text style={styles.textStyle2}>Top 10 in India Today</Text>
      </View>
      <FlatList
        data={NetflixData}
        renderItem={({ item }) => {
          return (
            <NetflixCard
              img={item.image}
              name={item.name}
              desc={item.desc}
              trail={item.trailer}
            />
          );
        }}
        keyExtractor={(item) => item.name}
        horizontal
      />
    </View>
  );
}

const styles = StyleSheet.create({
  textStyle1: {
    fontSize: 34,
    padding: 20,
    textAlign: "center",
    color: "#be0000",
    letterSpacing: 2,
    marginTop: 30,
    marginBottom: -30,
  },
  headStyle: {
    backgroundColor: "black",
  },
  textStyle2: {
    color: "white",
    fontSize: 18,
    textAlign: "left",
    marginTop: 20,
    marginBottom: -30,
    marginLeft: 40,
    fontWeight: "600",
  },
});
