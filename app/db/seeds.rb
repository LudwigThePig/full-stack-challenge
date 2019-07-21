12.times do |name|
  Company.create!(
    name: "Company #{name}",
    city: "Boulder",
    state: "CO",
    description: "This description was generated from a seed file but let your imagination run wild. This could be a company that flies puppies to Mars or it could be a non-profit that is working to unearth Atlantis."
  )
end

puts "12 companies created"


24.times do |founder|
  Founder.create!(
    founder: "Human ##{founder}",
    title: "CEO",
    company_id: rand(12)
  )
end