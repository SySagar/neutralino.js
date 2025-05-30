export interface WindowOptions extends WindowSizeOptions, WindowPosOptions {
    title?: string;
    icon?: string;
    fullScreen?: boolean;
    alwaysOnTop?: boolean;
    enableInspector?: boolean;
    borderless?: boolean;
    maximize?: boolean;
    hidden?: boolean;
    maximizable?: boolean;
    useSavedState?: boolean;
    exitProcessOnClose?: boolean;
    extendUserAgentWith?: string;
    injectGlobals?: boolean;
    injectClientLibrary?: boolean;
    injectScript?: string;
    processArgs?: string;
  }
  
  export interface WindowSizeOptions {
    width?: number;
    height?: number;
    minWidth?: number;
    minHeight?: number;
    maxWidth?: number;
    maxHeight?: number;
    resizable?: boolean;
  }
  
  export interface WindowPosOptions {
    x: number;
    y: number;
  }

  export interface WindowMenu extends Array<WindowMenuItem>{}

  export interface WindowMenuItem {
      id?: string;
      text: string;
      isDisabled?: boolean;
      isChecked?: boolean;
      menuItems?: WindowMenuItem[];
  }
