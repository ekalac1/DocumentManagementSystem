import ifConditionHelper from 'myapp/helpers/if-condition';

export default function() {
  var options = arguments[arguments.length - 1];

  // Find all unique values in the array; if one is left, they were all equal
  options.conditional = function(results) {
    return results.uniq().length === 1;
  };

  return ifConditionHelper.apply(this, arguments);
}
