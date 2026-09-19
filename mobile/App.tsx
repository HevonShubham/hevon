import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import {
  ActivityIndicator,
  Alert,
  Image,
  KeyboardAvoidingView,
  Linking,
  Platform,
  Pressable,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";

type Tab = "home" | "vote" | "access";

const flavours = [
  { name: "Rich Chocolate", note: "Deep cocoa with a creamy finish", color: "#6F4738" },
  { name: "Vanilla Crème", note: "Soft vanilla with a clean finish", color: "#D9AA59" },
  { name: "Strawberry Bliss", note: "Bright, everyday strawberry", color: "#D6788A" },
  { name: "Mango Burst", note: "Tropical and refreshing mango", color: "#ED9B33" },
  { name: "Matcha Power", note: "Smooth matcha with an earthy note", color: "#789456" },
];

export default function App() {
  const [tab, setTab] = useState<Tab>("home");
  const [selected, setSelected] = useState<string | null>(null);
  const [email, setEmail] = useState("");
  const [submitting, setSubmitting] = useState(false);

  async function submitVote() {
    if (!selected) return Alert.alert("Choose a flavour", "Select one future flavour first.");
    if (!/^\S+@\S+\.\S+$/.test(email)) return Alert.alert("Add your email", "Enter a valid email address to submit your vote.");
    setSubmitting(true);
    const body = new URLSearchParams({
      "form-name": "flavour-vote",
      subject: "New HEVON flavour vote",
      source: "HEVON Mobile App Flavour Vote",
      flavour: selected,
      email,
    });
    try {
      const response = await fetch("https://hevon.in/__forms.html", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: body.toString(),
      });
      if (!response.ok) throw new Error("Vote failed");
      Alert.alert("Vote received", `Thanks. You chose ${selected}.`);
      setEmail("");
    } catch {
      Alert.alert("Could not submit", "Please try again, or vote at hevon.in.");
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <SafeAreaView style={styles.safe}>
      <StatusBar style="dark" />
      <KeyboardAvoidingView style={styles.flex} behavior={Platform.OS === "ios" ? "padding" : undefined}>
        <View style={styles.header}>
          <Text style={styles.logo}>HEV<Text style={styles.logoOrange}>O</Text>N</Text>
          <View style={styles.prelaunch}><Text style={styles.prelaunchText}>IN DEVELOPMENT</Text></View>
        </View>

        <ScrollView contentContainerStyle={styles.content} showsVerticalScrollIndicator={false} keyboardShouldPersistTaps="handled">
          {tab === "home" && (
            <>
              <View style={styles.heroCopy}>
                <Text style={styles.eyebrow}>A HIGHER YOU · EVERY DAY</Text>
                <Text style={styles.title}>Protein Coffee.{"\n"}<Text style={styles.orange}>Fuel your day.</Text></Text>
                <Text style={styles.body}>A coffee-first ready-to-drink protein beverage being developed for everyday Indian routines.</Text>
              </View>
              <View style={styles.bottleCard}>
                <View style={styles.glow} />
                <Image source={require("./assets/hevon-bottle.png")} resizeMode="contain" style={styles.bottle} />
              </View>
              <View style={styles.stats}>
                {[['22g','Protein target'],['0g','Added sugar target'],['250ml','Ready to drink']].map(([value,label]) => (
                  <View key={label} style={styles.stat}><Text style={styles.statValue}>{value}</Text><Text style={styles.statLabel}>{label}</Text></View>
                ))}
              </View>
              <Text style={styles.disclaimer}>Pre-launch targets. Final nutrition values and pack details may change after product and regulatory validation.</Text>
              <Pressable style={styles.primary} onPress={() => setTab("vote")}><Text style={styles.primaryText}>Choose the next flavour</Text></Pressable>
            </>
          )}

          {tab === "vote" && (
            <>
              <Text style={styles.eyebrow}>SHAPE WHAT COMES NEXT</Text>
              <Text style={styles.pageTitle}>Choose one future flavour.</Text>
              <Text style={styles.body}>Protein Coffee is planned first. Your vote helps HEVON understand what to explore next.</Text>
              <View style={styles.flavourList}>
                {flavours.map((flavour) => {
                  const active = selected === flavour.name;
                  return (
                    <Pressable key={flavour.name} onPress={() => setSelected(flavour.name)} style={[styles.flavour, active && styles.flavourActive]}>
                      <View style={[styles.swatch, { backgroundColor: flavour.color }]} />
                      <View style={styles.flavourCopy}><Text style={styles.flavourName}>{flavour.name}</Text><Text style={styles.flavourNote}>{flavour.note}</Text></View>
                      <View style={[styles.radio, active && styles.radioActive]}>{active && <Text style={styles.check}>✓</Text>}</View>
                    </Pressable>
                  );
                })}
              </View>
              <TextInput value={email} onChangeText={setEmail} keyboardType="email-address" autoCapitalize="none" autoComplete="email" placeholder="Your email address" placeholderTextColor="#8C8179" style={styles.input} />
              <Pressable onPress={submitVote} disabled={submitting} style={[styles.primary, submitting && styles.disabled]}>
                {submitting ? <ActivityIndicator color="#fff" /> : <Text style={styles.primaryText}>Submit vote</Text>}
              </Pressable>
              <Text style={styles.privacy}>One vote per person. Your email is used only for HEVON updates.</Text>
            </>
          )}

          {tab === "access" && (
            <View style={styles.accessCard}>
              <Text style={styles.eyebrow}>FOUNDING COMMUNITY</Text>
              <Text style={styles.pageTitle}>Be early. Help shape HEVON.</Text>
              <Text style={styles.body}>Join for product development updates, possible tasting opportunities, and launch news.</Text>
              <View style={styles.benefits}>
                {['Hear about early tasting opportunities','Share your city and product preferences','Receive consent-based HEVON updates'].map(item => <Text key={item} style={styles.benefit}>✓  {item}</Text>)}
              </View>
              <Pressable style={styles.primary} onPress={() => Linking.openURL("https://hevon.in/#waitlist")}><Text style={styles.primaryText}>Join early access</Text></Pressable>
              <Pressable style={styles.secondary} onPress={() => Linking.openURL("https://wa.me/917905558324?text=Hi%20HEVON%2C%20I%20want%20to%20know%20more%20about%20early%20access.")}><Text style={styles.secondaryText}>Chat with HEVON</Text></Pressable>
            </View>
          )}
        </ScrollView>

        <View style={styles.nav}>
          {([['home','Home'],['vote','Vote'],['access','Early access']] as [Tab,string][]).map(([key,label]) => (
            <Pressable key={key} onPress={() => setTab(key)} style={styles.navItem}><View style={[styles.navDot, tab === key && styles.navDotActive]} /><Text style={[styles.navText, tab === key && styles.navTextActive]}>{label}</Text></Pressable>
          ))}
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  flex:{flex:1}, safe:{flex:1,backgroundColor:'#FFF8F2'}, header:{height:70,paddingHorizontal:22,flexDirection:'row',alignItems:'center',justifyContent:'space-between',borderBottomWidth:1,borderBottomColor:'#EBDDD2'},logo:{fontSize:25,fontWeight:'900',letterSpacing:1,color:'#111'},logoOrange:{color:'#FF6700'},prelaunch:{backgroundColor:'#F4E6DA',borderRadius:99,paddingHorizontal:10,paddingVertical:6},prelaunchText:{fontSize:9,fontWeight:'800',letterSpacing:1,color:'#8A4B24'},content:{padding:22,paddingBottom:120},heroCopy:{marginTop:15},eyebrow:{fontSize:11,fontWeight:'900',letterSpacing:1.8,color:'#FF6700'},title:{fontSize:42,lineHeight:44,fontWeight:'900',letterSpacing:-1.8,color:'#111',marginTop:12},pageTitle:{fontSize:34,lineHeight:38,fontWeight:'900',letterSpacing:-1.2,color:'#111',marginTop:10},orange:{color:'#FF6700'},body:{fontSize:16,lineHeight:25,color:'#665D57',marginTop:14},bottleCard:{height:370,borderRadius:32,backgroundColor:'#EFD8C7',marginTop:26,overflow:'hidden',alignItems:'center',justifyContent:'center'},glow:{position:'absolute',width:260,height:260,borderRadius:130,backgroundColor:'#FFF4E8'},bottle:{width:'75%',height:'94%'},stats:{flexDirection:'row',gap:8,marginTop:14},stat:{flex:1,backgroundColor:'#fff',borderRadius:18,padding:13,borderWidth:1,borderColor:'#EEE4DC'},statValue:{fontSize:20,fontWeight:'900',color:'#111'},statLabel:{fontSize:10,lineHeight:14,color:'#736961',marginTop:3},disclaimer:{fontSize:10,lineHeight:15,color:'#8C8179',marginTop:10},primary:{minHeight:56,borderRadius:28,backgroundColor:'#FF6700',alignItems:'center',justifyContent:'center',paddingHorizontal:22,marginTop:20},primaryText:{color:'#fff',fontSize:15,fontWeight:'900'},disabled:{opacity:.55},flavourList:{gap:10,marginTop:24},flavour:{minHeight:82,flexDirection:'row',alignItems:'center',backgroundColor:'#fff',borderRadius:20,padding:14,borderWidth:1,borderColor:'#E9DED5'},flavourActive:{borderColor:'#FF6700',borderWidth:2},swatch:{width:8,height:48,borderRadius:8},flavourCopy:{flex:1,marginLeft:14},flavourName:{fontSize:16,fontWeight:'800',color:'#17120F'},flavourNote:{fontSize:12,lineHeight:17,color:'#746A63',marginTop:3},radio:{width:28,height:28,borderRadius:14,borderWidth:1,borderColor:'#CFC1B7',alignItems:'center',justifyContent:'center'},radioActive:{backgroundColor:'#FF6700',borderColor:'#FF6700'},check:{color:'#fff',fontWeight:'900'},input:{height:56,borderRadius:28,borderWidth:1,borderColor:'#DCCFC5',backgroundColor:'#fff',paddingHorizontal:18,fontSize:15,color:'#111',marginTop:20},privacy:{fontSize:10,lineHeight:15,textAlign:'center',color:'#8C8179',marginTop:10},accessCard:{marginTop:18,borderRadius:30,backgroundColor:'#17120F',padding:25},benefits:{gap:14,marginTop:28},benefit:{fontSize:14,lineHeight:20,color:'#D8CCC4'},secondary:{minHeight:54,borderRadius:27,borderWidth:1,borderColor:'#5B4D45',alignItems:'center',justifyContent:'center',marginTop:12},secondaryText:{color:'#fff',fontSize:15,fontWeight:'800'},nav:{position:'absolute',left:12,right:12,bottom:10,height:68,borderRadius:24,backgroundColor:'#17120F',flexDirection:'row',paddingHorizontal:6,shadowColor:'#000',shadowOpacity:.18,shadowRadius:16,shadowOffset:{width:0,height:7},elevation:10},navItem:{flex:1,alignItems:'center',justifyContent:'center'},navDot:{width:5,height:5,borderRadius:3,backgroundColor:'transparent',marginBottom:5},navDotActive:{backgroundColor:'#FF6700'},navText:{fontSize:11,fontWeight:'700',color:'#8F827A'},navTextActive:{color:'#fff'},
});
