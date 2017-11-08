declare class MyClass {
  no_params(): any;
  one_param(p1: any): any;
  two_params(p1: any, p2: any): any;
  typed_return(): boolean;
  two_typed_params_and_typed_return(p1: string, p2: number): boolean;
  typed_rest_param(...p1: string[]): any;
  undocumented_rest_param(...p1: any[]): any;
  optional_param(p1?: string): any;
  required_and_optional_param(p1: any, p2?: string): any;
  defaulted_param(p1?: any): any;
  defaulted_and_optional_param(p1?: any, p2?: string): any;
  defaulted_and_required_param(p1: any|undefined, p2: any): any;
}