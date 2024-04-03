import React from 'react';
import {
  ImageBackground,
  SafeAreaView,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import {colors} from '../theme/colors';
import {spacing} from '../theme/spacing';
import {typography} from '../theme/typography';
import {timing} from '../theme/timing';
import {ViewStyle, TextStyle, ImageStyle, StyleSheet} from 'react-native';

export const SignUp = () => {
  return (
    <ImageBackground
      style={$IMAGE_BACKGROUND}
      source={require('../../assits/background.jpeg')}>
      <SafeAreaView>
        <ScrollView contentContainerStyle={$SCROLL_CONTAINER_STYLE}>
          <Text style={styles.title}>Sign Up</Text>
          <Text style={styles.subtitle}>
            Please enter your email and password to sign up.
          </Text>
          <View style={$CARD_SIGN_UP}>
            <TextInput
              style={styles.input}
              placeholder="Email"
              placeholderTextColor={colors.dark}
            />
            <TextInput
              style={styles.input}
              placeholder="Password"
              placeholderTextColor={colors.dark}
              secureTextEntry
            />
            <TextInput
              style={styles.input}
              placeholder="Confirm Password"
              placeholderTextColor={colors.dark}
              secureTextEntry
            />
            <TouchableOpacity style={styles.buttonStyle}>
              <Text style={styles.buttonTextStyle}>Sign Up</Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Text style={styles.signInLink}>
                Already have an account? Sign In
              </Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </SafeAreaView>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: colors.text,
    textAlign: 'left',
    marginBottom: spacing.medium,
    marginLeft: spacing.large,
  },
  subtitle: {
    fontSize: 16,
    color: colors.text,
    textAlign: 'left',
    marginBottom: spacing.small,
    marginLeft: spacing.large,
    width: '70%',
  },
  input: {
    backgroundColor: colors.text,
    borderRadius: spacing.medium,
    borderWidth: 1,
    borderColor: colors.lightGrey2,
    padding: spacing.medium,
    marginTop: spacing.extraLarge,
    color: colors.dark,
    width: '100%',
    height: 50,
  },
  signInLink: {
    color: colors.button,
    textAlign: 'center',
    marginTop: spacing.large,
  },
  buttonStyle: {
    backgroundColor: colors.palette.button,
    padding: spacing.medium,
    borderRadius: spacing.medium,
    marginTop: spacing.large,
  },
  buttonTextStyle: {
    color: colors.text,
    textAlign: 'center',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

// ImageBackground styles
const $IMAGE_BACKGROUND: ImageStyle = {
  width: '100%',
  height: '100%',
};

// Card sign-up styles
const $CARD_SIGN_UP: ViewStyle = {
  backgroundColor: colors.text,
  borderRadius: spacing.extraLarge,
  padding: spacing.large,
  shadowColor: colors.dark,
  width: '100%',
  marginTop: '55%',
  height: 470,
  shadowOffset: {
    width: 0,
    height: 4,
  },
  shadowOpacity: 0.1,
  shadowRadius: 4.65,
  elevation: 4,
};

// Scroll container styles
const $SCROLL_CONTAINER_STYLE: ViewStyle = {
  flexGrow: 1,
  justifyContent: 'center',
  marginTop: '10%',
};
