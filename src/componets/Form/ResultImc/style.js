import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({

  formContext:
  {
    width: '100%',
    heigth: '100%',
    bottom: 0,
    backgroundColor: '#fff',
    alignItems: 'center',
    paddingTop: 30,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    marginTop: 30,
    justifyContent: 'space-around',
    marginTop: 100,
    paddingTop: 20

  },

  form:
  {
    width: '100%',
    height: 'auto',
    marginTop: 30,
    paddingT: 10
  },

  formLabel:
  {
    color: '#000',
    fontSize: 18,
    paddingLeft: 20,
  },


  input:
  {
    width: '90%',
    borderRadius: 50,
    backgroundColor: '#f6f6f6',
    height: 40,
    margin: 12,
    paddingLeft: 10
  },

buttonCalculator:
{
  borderRadius: 50,
  alignItems: 'center',
  justifyContent: 'center',
  width: '90%',
  backgroundColor: '#ff0043',
  paddingTop: 14,
  paddingBottom: 14,
  marginLeft: 12,
  margin: 30
},

textButtonCalculator:
{
  fontSize: 20,
  color: '#fff'
},


resultImc:
{
  flex: 1,
  marginTop: 15,
  paddingTop: 60,
  borderRadius: 50,
  alignItems: 'center',
  width: '100%',
  fontSize: 48,
  color: '#ff004',
  fontWeight: 'bold'
},

information:
{
  fontSize: 19,
  color: '#ff004',
  fontWeight: 'bold'
},


errorMessage:
{
  fontSize: 12,
  color: 'red',
  fontWeight: 'bold',
  paddingLeft: 20
},

boxShareButton:
{
  width: '100%',
  alignItems: 'center',
  marginTop: 10,
  height: 150,
  backgroundColor: '#fff'
},

shared:
{
  backgroundColor: '#1877f2',
  borderRadius: 50,
  paddingBottom: 5,
  paddingTop: 5,
},

sharedText:
{
  color: '#ffff',
  fontWeight: 'bold',
  paddingHorizontal: 30,
},

exibibitionButton:
{
  width: '100%',
  height: '30%'

},

listImcs:
{
  marginTop: 50,
  width: '100%',
  height: '50%',
  backgroundColor: 'black',
  alignItems: 'center',
},
resultImcItem:
{
  fontSize: 18,
  color: 'red',
  height:'50%',
  width: '100%',
  paddingRight: 20,
},

textResultItemList:
{
  fontSize: 16,
}



});


export default styles;
