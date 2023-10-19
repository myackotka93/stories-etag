import variables from './export.module.scss';

const numericVariables = {
  slowTransition: Number(variables.slowTransition),
  mediumTransition: Number(variables.mediumTransition),
  fastTransition: Number(variables.fastTransition),
  radiusInput: Number(variables.radiusInput),
  scaleHeavy: Number(variables.scaleHeavy),
  scaleMedium: Number(variables.scaleMedium),
  scaleLight: Number(variables.scaleLight),
};

export default numericVariables;
