import { StyleSheet } from 'react-native';
import { THEME } from '../../theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: THEME.COLORS.OVERLAY,
  },
  content: {
    width: 310,
    backgroundColor: THEME.COLORS.SHAPE,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  closeIcon: {
    alignSelf: 'flex-end',
    margin: 15,
  },
  label: {
    marginTop: 25,
    marginBottom: 10,
    color: THEME.COLORS.TEXT,
    fontSize: THEME.FONT_SIZE.MD,
    fontFamily: THEME.FONT_FAMILY.SEMI_BOLD,
  },
  discordButton: {
    width: 230,
    height: 50,
    borderRadius: 5,
    marginBottom: 30,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: THEME.COLORS.BACKGROUND_900,
  },
  discord: {
    color: THEME.COLORS.TEXT,
    fontSize: THEME.FONT_SIZE.MD,
    fontFamily: THEME.FONT_FAMILY.REGULAR,
  }
});

