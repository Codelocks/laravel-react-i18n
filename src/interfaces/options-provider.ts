import OptionsInterface from './options.ts';

/**
 * The Interface that is responsible for the OptionsProvider provided.
 */
export default interface OptionsProviderInterface extends OptionsInterface {
  prevLocale?: string;
}
