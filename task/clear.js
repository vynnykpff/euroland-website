import del from 'del';

// Configuration
import { path } from '../config/path.js';

// Delete directory
export const clear = () => {
	return del(path.root);
};
