export interface Plane {
    id: string;
    generalInfo: string;
    generalChar: string;
    performance: string;
    image: string;
  }
export type RootStackParamList = {
    FighterCollection: undefined;
    NewPlaneDetail: { plane: Plane }; 
    Home:undefined;
    Eras: undefined;
    Glossary:undefined;
    PlaneDetailBF109: undefined;
    PlaneDetailBF110: undefined;
    BF109Collection: undefined;
    BF110Collection: undefined;
    AddPlane: undefined;
    Splash: undefined;
    LogIn: undefined;
  };
  