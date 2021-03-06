import { COLORS } from 'shared/constants/tetromino';
import Tetromino from '../..//Tetromino';

export default {
  component: Tetromino,

  props: {
    color: COLORS.Z,
    grid: [[0, 0, 1], [0, 1, 1], [0, 1, 0]]
  }
};
