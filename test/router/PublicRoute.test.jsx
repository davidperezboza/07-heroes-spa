import { render, screen} from '@testing-library/react';
import { PublicRoute } from '../../src/router/';

describe('Pruebas en <PublicRoute />', () => { 
    test('debe de mostrar el children si nmo está autenticado', () => { 
        render(<PublicRoute />);
    });
});