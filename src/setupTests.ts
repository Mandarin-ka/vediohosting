import { TextDecoder, TextEncoder } from 'util';

import '@testing-library/jest-dom';
import '@testing-library/jest-dom/extend-expect';

Object.assign(global, { TextDecoder, TextEncoder });
