import { Capacitor } from '@capacitor/core';
import { LocalNotifications } from '@capacitor/local-notifications';

window.WirdiNative = {
  isNative: Capacitor.isNativePlatform() && Capacitor.getPlatform() === 'android',
  LN: LocalNotifications
};
