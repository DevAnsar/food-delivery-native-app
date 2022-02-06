import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  StatusBar,
  TextInput,
  TouchableOpacity,
  Alert,
} from 'react-native';
import {Formik} from 'formik';
import * as yup from 'yup';
const MAIN_COLOR = '#f1c40f';

let mobileSchema = yup.object().shape({
  mobile: yup.string().min(11, 'شماره موبایل صحیح نیست'),
});
let codeSchema = yup.object().shape({
  code: yup.string().length(4, 'کد باید 4 رقمی باشد'),
});

const LoginScreen = () => {
  const [level, setLevel] = useState(2);

  const handleSendMobile = values => {
    Alert.alert(
      ``,
      `شماره موبایل که قصد ورود با آن را دارید: ${values.mobile}`,
      [
        {
          text: 'خروج',
          onPress: () => {},
        },
        {
          text: 'ادامه',
          onPress: () => {
            setLevel(2);
          },
        },
      ],
      {
        cancelable: true,
      },
    );
  };

  const handleSendCode = values => {
    Alert.alert(
      ``,
      `کد: ${values.code}`,
      [
        {
          text: 'خروج',
          onPress: () => {},
        },
        {
          text: 'ادامه',
          onPress: () => {},
        },
      ],
      {
        cancelable: true,
      },
    );
  };

  const MobileForm = () => {
    return (
      <Formik
        initialValues={{mobile: '09'}}
        validationSchema={mobileSchema}
        onSubmit={values => handleSendMobile(values)}>
        {({handleChange, handleBlur, handleSubmit, values, errors}) => (
          <View style={styles.form}>
            <View style={{width: '100%'}}>
              <TextInput
                keyboardType="decimal-pad"
                maxLength={11}
                editable
                style={styles.input}
                value={values.mobile}
                onChangeText={handleChange('mobile')}
                onBlur={handleBlur('mobile')}
              />
              <Text style={styles.fieldError}>{errors.mobile}</Text>
              <Text style={styles.inputTextLabel}>
                برای ورود یا ثبت نام در برنامه شماره موبایل خود را در بخش بالا
                وارد نمایید و سپس دکمه ی ادامه را لمس کنید
              </Text>

              <Text style={styles.acceptTermsOfUse}>
                با ثبت نام و ورود به برنامه شما قوانین استفاده از آن را قبول
                میکیند
              </Text>

              <Text style={styles.termsOfUse}>
                مشاهده قوانین استفاده از دتال
              </Text>
            </View>
            <TouchableOpacity
              onPress={handleSubmit}
              activeOpacity={0.7}
              style={styles.defaultBtn}>
              <Text style={[styles.btnText, styles.defaultBtnText]}>
                ارسال کد تایید
              </Text>
            </TouchableOpacity>
          </View>
        )}
      </Formik>
    );
  };
  const CodeForm = () => {
    return (
      <Formik
        initialValues={{code: ''}}
        validationSchema={codeSchema}
        onSubmit={values => handleSendCode(values)}>
        {({handleChange, handleBlur, handleSubmit, values, errors}) => (
          <View style={styles.form}>
            <View style={{width: '100%'}}>
              <TextInput
                keyboardType="decimal-pad"
                maxLength={4}
                style={styles.input}
                value={values.code}
                onChangeText={handleChange('code')}
                onBlur={handleBlur('code')}
              />
              <Text style={styles.fieldError}>{errors.code}</Text>
              <Text style={styles.inputTextLabel}>
                برای شما یک پیامک حاوی کد تایید ارسال شده است. لطفا کد ارسال شده
                را در بخش بالا وارد کنید
              </Text>
            </View>

            <TouchableOpacity
              onPress={handleSubmit}
              activeOpacity={0.7}
              style={styles.greyBtn}
              disabled>
              <Text style={[styles.btnText, styles.greyBtnText]}>
                ارسال مجدد کد از طریق پیامک
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={handleSubmit}
              activeOpacity={0.7}
              style={styles.defaultBtn}>
              <Text style={[styles.btnText, styles.defaultBtnText]}>ورود</Text>
            </TouchableOpacity>
          </View>
        )}
      </Formik>
    );
  };
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={MAIN_COLOR} barStyle="dark-content" />
      <View style={styles.banner}>
        <Image
          style={styles.bannerImage}
          source={require('./../assets/images/detal.png')}
        />
      </View>
      <View style={styles.formContainer}>
        {level === 1 && <MobileForm />}
        {level === 2 && <CodeForm />}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  banner: {
    flex: 2,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: MAIN_COLOR,
  },
  bannerImage: {
    width: 150,
    height: 150,
    resizeMode: 'center',
  },
  formContainer: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingVertical: 25,
  },
  form: {
    width: '90%',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  input: {
    width: '100%',
    paddingHorizontal: 20,
    textAlign: 'center',
    borderRadius: 8,
    fontSize: 20,
    backgroundColor: '#eee',
  },
  fieldError: {
    textAlign: 'center',
    fontSize: 12,
    fontFamily: 'Yekan',
    color: 'red',
  },
  inputTextLabel: {
    marginTop: 0,
    marginBottom: 10,
    textAlign: 'center',
    fontSize: 15,
    fontFamily: 'Yekan',
  },
  acceptTermsOfUse: {
    marginTop: 5,
    textAlign: 'center',
    fontSize: 13,
    fontFamily: 'Yekan',
  },
  termsOfUse: {
    marginTop: 5,
    textAlign: 'center',
    fontSize: 13,
    fontFamily: 'Yekan',
    color: '#2980b9',
  },
  btnText: {
    textAlign: 'center',
    fontSize: 18,
    fontFamily: 'Yekan',
  },
  defaultBtn: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f1c40f',
    width: '100%',
    height: 50,
    borderRadius: 8,
    marginTop: 10,
  },
  defaultBtnText: {
    color: '#fff',
  },
  greyBtn: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#eee',
    width: '100%',
    height: 50,
    borderRadius: 8,
  },
  greyBtnText: {
    color: '#34495e',
    fontSize: 15,
  },
});
export default LoginScreen;
