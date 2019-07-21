companyNames = ["TechStars", "LudwigThePig", "Fakeblock", "Bluth Company", "Gobias Industries", "Father B. Colony", "Austero Bluth Company", "Cornballer"]

12.times do |name|
  Company.create!(
    name: "#{companyNames.sample}",
    city: "Boulder",
    state: "CO",
    description: "This description was generated from a seed file but let your imagination run wild. This could be a company that flies puppies to Mars or it could be a non-profit that is working to unearth Atlantis."
  )
end

puts "12 companies created"

founderNames = ["George Michael Sr.", "George Michael", "George Michael Jr.", "George Maharis" "Maebe Funke", "Gob Bluth", "Lindsay Bluth", "Buster Bluth", "Narrator", "Ann Veal", "Tobias Funke", "Lindsay Bluth Funke"]
titles = ["Mr. Manager", "CEO", "CTO", "CFO", "CMO", "COO"]

24.times do |founder|
  Founder.create!(
    founder: "#{founderNames.sample}",
    title: "#{titles.sample}",
    company_id: rand(12)
  )
end