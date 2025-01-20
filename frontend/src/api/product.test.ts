import { axiosInstance } from './index'; // Adjust the path based on your folder structure
import { IProduct } from '../types/product'; // Adjust the import based on your types structure
import ProductAPI from './product';

jest.mock('./index', () => ({
  axiosInstance: {
    get: jest.fn(),
  },
}));

describe('ProductAPI', () => {
  afterEach(() => {
    jest.clearAllMocks(); // Clear mocks after each test
  });

  test('should fetch products successfully', async () => {
    const mockProducts: IProduct[] = [
      {
        id: 1,
        title: 'Metal Gear Girl',
        category: 'Mythic',
        price: 30.09,
        isFavorite: false,
        createdAt: 1624533946000,
        theme: 'Halloween',
        tier: 'Premium',
        imageId: 8,
        author: {
          firstName: 'Dewie',
          lastName: 'Labeuil',
          email: 'dlabeuilv@nba.com',
          gender: 'Male',
          avatar:
            'https://robohash.org/nihiltotamdolorem.png?size=100x100&set=set1',
          onlineStatus: 'idle',
        },
      },
      {
        id: 2,
        title: 'Rhythm Ruler',
        category: 'Epic',
        price: 52.57,
        isFavorite: true,
        createdAt: 1652687980000,
        theme: 'Halloween',
        tier: 'Deluxe',
        imageId: 11,
        author: {
          firstName: 'Thaddeus',
          lastName: 'Tumulty',
          email: 'ttumultyt@t-online.de',
          gender: 'Male',
          avatar:
            'https://robohash.org/perferendisitaquedolor.png?size=100x100&set=set1',
          onlineStatus: 'offline',
        },
      },
      {
        id: 3,
        title: 'DJ Phantom',
        category: 'Accessory',
        price: 69.39,
        isFavorite: true,
        createdAt: 1695115094000,
        theme: 'Halloween',
        tier: 'Premium',
        imageId: 15,
        author: {
          firstName: 'Alexis',
          lastName: 'Blandamore',
          email: 'ablandamore13@blog.com',
          gender: 'Female',
          avatar:
            'https://robohash.org/expeditanostrumcommodi.png?size=100x100&set=set1',
          onlineStatus: 'idle',
        },
      },
    ] as IProduct[];
    (axiosInstance.get as jest.Mock).mockResolvedValueOnce({
      data: mockProducts,
    });

    const response = await ProductAPI.getProducts(0, 10, 0, 300);

    expect(axiosInstance.get).toHaveBeenCalledWith(
      '/products?_page=0&limit=10&price_gte=0&price_lte=300',
    );
    expect(response).toEqual({ products: mockProducts });
  });

  test('should handle search value correctly', async () => {
    const mockProducts: IProduct[] = [];
    (axiosInstance.get as jest.Mock).mockResolvedValueOnce({
      data: mockProducts,
    });

    await ProductAPI.getProducts(0, 10, 0, 300, 'Test Product');

    expect(axiosInstance.get).toHaveBeenCalledWith(
      '/products?_page=0&limit=10&price_gte=0&price_lte=300&title_like=Test Product',
    );
  });

  test('should handle filtering by theme', async () => {
    const mockProducts: IProduct[] = [];
    (axiosInstance.get as jest.Mock).mockResolvedValueOnce({
      data: mockProducts,
    });

    await ProductAPI.getProducts(0, 10, 0, 300, undefined, 'Theme 1');

    expect(axiosInstance.get).toHaveBeenCalledWith(
      '/products?_page=0&limit=10&price_gte=0&price_lte=300&theme=Theme 1',
    );
  });

  test('should handle sorting by price', async () => {
    const mockProducts: IProduct[] = [];
    (axiosInstance.get as jest.Mock).mockResolvedValueOnce({
      data: mockProducts,
    });

    await ProductAPI.getProducts(
      0,
      10,
      0,
      300,
      undefined,
      undefined,
      undefined,
      undefined,
      'asc',
    );

    expect(axiosInstance.get).toHaveBeenCalledWith(
      '/products?_page=0&limit=10&price_gte=0&price_lte=300&_sort=price&_order=asc',
    );
  });

  test('should handle errors', async () => {
    (axiosInstance.get as jest.Mock).mockRejectedValueOnce(
      new Error('Network Error'),
    );

    await expect(ProductAPI.getProducts(0, 10, 0, 300)).rejects.toThrow(
      'Network Error',
    );
  });
});
