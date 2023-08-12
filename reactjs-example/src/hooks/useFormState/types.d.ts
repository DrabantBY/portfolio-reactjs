export type FormInitStateType = {
  price: string;
  basic: number;
  senior: number;
  total: number;
  date: string;
  time: string;
  name: string;
  isNameError: boolean;
  phone: string;
  isPhoneError: boolean;
  email: string;
  isEmailError: boolean;
  isActiveResetBtn: boolean;
  isActiveSubmitBtn: boolean;
};

export type ActionType =
  | {
      type: 'price';
      price: string;
    }
  | {
      type: 'basic';
      basic: number;
    }
  | {
      type: 'senior';
      senior: number;
    }
  | {
      type: 'name';
      name: string;
    }
  | {
      type: 'phone';
      phone: string;
    }
  | {
      type: 'email';
      email: string;
    }
  | {
      type: 'date';
      date: string;
    }
  | {
      type: 'time';
      time: string;
    }
  | {
      type: 'reset';
    };
