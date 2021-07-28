/**
 * @format
 */

import 'react-native';
import React from 'react';
import App from '../App';
// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';
import { describe, expect, test } from '@jest/globals'
jest.mock('react-native-animatable', () => 'react-native-animatable');

// 
jest.useFakeTimers();
it('renders correctly', () => {
  renderer.create(<App />);
});
