export interface Plane {
    id: string;
    title: string;
    generalInfo: string;
    generalChar: string;
    performance: string;
    image: string;
    operators: string[];
  }
export type RootStackParamList = {
    FighterCollection: undefined;
    NewPlaneDetail: { planeId: string }; 
    Home:undefined;
    Eras: undefined;
    Glossary:undefined;
    PlaneDetailBF109: undefined;
    PlaneDetailBF110: undefined;
    BF109Collection: undefined;
    BF110Collection: undefined;
    AddPlane: {plane?: Plane},
    Splash: undefined;
    LogIn: undefined;
  };
  
  export interface Operator {
    id: string;
    name: string;
    image: any; // Adjust type as necessary based on your image source type
  };