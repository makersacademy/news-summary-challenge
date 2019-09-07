class Stuff
  def method
    return unless invalidSyntax?(value)

    # Method goes here

  end

  private

  def invalidSyntax(value)
    value.include('/')
  end
end